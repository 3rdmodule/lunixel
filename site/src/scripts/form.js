// Formulaire « Parler de mon projet » : une question par écran, erreurs humaines, envoi sans rechargement.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function initForm(form) {
  const steps = [...form.querySelectorAll('fieldset[data-step]')];
  const dots = [...form.querySelectorAll('[data-progress] li')];
  const counter = form.querySelector('[data-counter]');
  const live = form.querySelector('[data-counter-live]');
  const prev = form.querySelector('[data-prev]');
  const next = form.querySelector('[data-next]');
  const submit = form.querySelector('[data-submit]');
  const status = form.querySelector('[data-status]');
  const key = form.dataset.key;
  const to = form.dataset.to;
  let current = 0;

  const params = new URLSearchParams(location.search);
  const pre = params.get('activite');
  if (pre) {
    const radio = form.querySelector(`input[name="activite"][value="${CSS.escape(pre)}"]`);
    if (radio) { radio.checked = true; current = 1; }
  }

  const show = (i, focus = true) => {
    current = i;
    steps.forEach((s, k) => s.classList.toggle('is-current', k === i));
    dots.forEach((d, k) => {
      d.classList.toggle('is-done', k < i);
      d.classList.toggle('is-current', k === i);
    });
    if (counter) counter.textContent = `Étape ${i + 1} sur ${steps.length}`;
    if (live && focus) live.textContent = `Étape ${i + 1} sur ${steps.length}`;
    prev.hidden = i === 0;
    next.hidden = i === steps.length - 1;
    submit.hidden = i !== steps.length - 1;
    if (focus) {
      const legend = steps[i].querySelector('legend');
      legend.tabIndex = -1;
      legend.focus({ preventScroll: true });
      const top = form.getBoundingClientRect().top + window.scrollY - 110;
      if (window.scrollY > top) window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const setError = (el, msg) => {
    const box = form.querySelector(`[data-error-for="${el}"]`);
    const field = box?.closest('.field');
    if (box) box.textContent = msg || '';
    if (field) field.toggleAttribute('data-invalid', !!msg);
    const input = form.querySelector(`[name="${el}"]`);
    if (input && input.type !== 'radio') input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  };

  const validate = (i) => {
    const s = steps[i];
    let ok = true;
    if (s.dataset.step === 'activite' || s.dataset.step === 'projet') {
      const name = s.dataset.step;
      const chosen = form.querySelector(`input[name="${name}"]:checked`);
      setError(name, chosen ? '' : name === 'activite' ? 'Choisissez ce qui vous ressemble le plus, même approximativement.' : 'Choisissez une option. « Je ne sais pas encore » est une très bonne réponse.');
      ok = !!chosen;
    }
    if (s.dataset.step === 'contact') {
      const prenom = form.prenom.value.trim();
      const email = form.email.value.trim();
      const tel = form.telephone.value.trim();
      setError('prenom', prenom ? '' : 'Indiquez votre prénom, pour que je sache à qui répondre.');
      let contactMsg = '';
      if (!email && !tel) contactMsg = 'Laissez un e-mail ou un téléphone, au choix.';
      else if (email && !EMAIL.test(email)) contactMsg = email.includes('@') ? 'L’adresse e-mail semble incomplète.' : 'Il manque le @ dans l’adresse e-mail.';
      setError('email', contactMsg);
      ok = !!prenom && !contactMsg;
    }
    if (!ok) {
      const firstInvalid = s.querySelector('[data-invalid] input, [aria-invalid="true"], input[type="radio"]');
      firstInvalid?.focus();
    }
    return ok;
  };

  // Les erreurs se vérifient à la sortie du champ, jamais pendant la saisie
  form.email.addEventListener('blur', () => form.email.value && validate(steps.length - 1));
  form.prenom.addEventListener('input', () => form.prenom.value.trim() && setError('prenom', ''));
  form.addEventListener('change', (e) => { if (e.target.type === 'radio') setError(e.target.name, ''); });

  next.addEventListener('click', () => validate(current) && show(current + 1));
  prev.addEventListener('click', () => show(current - 1));

  const summary = () => {
    const d = new FormData(form);
    const label = (name) => form.querySelector(`input[name="${name}"]:checked`)?.dataset.label || '';
    return {
      prenom: (d.get('prenom') || '').toString().trim(),
      entreprise: (d.get('entreprise') || '').toString().trim(),
      email: (d.get('email') || '').toString().trim(),
      telephone: (d.get('telephone') || '').toString().trim(),
      activite: label('activite'),
      projet: label('projet'),
      delai: label('delai'),
      budget: label('budget'),
      rappel: d.get('rappel') ? 'Oui' : 'Non',
      message: (d.get('message') || '').toString().trim(),
    };
  };

  const toText = (s) => {
    const rows = [
      ['Prénom', s.prenom],
      ['Entreprise', s.entreprise],
      ['Activité', s.activite],
      ['Projet', s.projet],
      ['Délai', s.delai],
      ['Budget', s.budget],
      ['E-mail', s.email],
      ['Téléphone', s.telephone],
      ['Préfère être rappelé(e)', s.rappel],
    ].filter(([, v]) => v);
    return [...rows.map(([k, v]) => `${k} : ${v}`), '', s.message].join('\n');
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (current < steps.length - 1) {
      if (validate(current)) show(current + 1);
      return;
    }
    for (let i = 0; i < steps.length; i++) {
      if (!validate(i)) { show(i); return; }
    }
    if (form.botcheck?.checked) return;
    const s = summary();
    const subject = `Nouveau projet : ${s.activite} · ${s.prenom}${s.entreprise ? ` (${s.entreprise})` : ''}`;
    status.textContent = '';

    if (!key) {
      const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(toText(s))}`;
      window.location.href = href;
      status.innerHTML = `Votre messagerie s’ouvre avec votre message prêt à partir : il ne reste qu’à l’envoyer. Rien ne s’ouvre ? Écrivez-moi directement à <a href="mailto:${to}">${to}</a>.`;
      return;
    }

    submit.classList.add('is-loading');
    submit.setAttribute('aria-busy', 'true');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key,
          subject,
          from_name: 'lunixel.fr',
          replyto: s.email || undefined,
          ...s,
          botcheck: '',
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false) throw new Error(json.message || res.statusText);
      window.location.href = `/contact/merci/?prenom=${encodeURIComponent(s.prenom)}`;
    } catch {
      submit.classList.remove('is-loading');
      submit.removeAttribute('aria-busy');
      status.innerHTML = `L’envoi n’a pas fonctionné, désolé. Votre message n’est pas perdu : <a href="mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(toText(s))}">envoyez-le par e-mail</a> en un clic.`;
    }
  });

  show(current, false);
}
