import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  firstDelayInput: document.querySelector('[name="delay"]'),
  delayStepInput: document.querySelector('[name="step"]'),
  amoutInput: document.querySelector('[name="amount"]')
};

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const generatorPromices = (e) => {
  e.preventDefault();

  let valueDelay = Number(refs.firstDelayInput.value);
  let step = Number(refs.delayStepInput.value);
  let amount = Number(refs.amoutInput.value);

  if (!valueDelay || !step || !amount) { 
    return  Notiflix.Report.failure(
      'Fuck',
      'Fill all the fields',
      'OK'
       );
  }

  for (let i = 1; i <= amount; i += 1) {
    let promiseDelay = valueDelay + step * i;

    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
};

refs.form.addEventListener('submit', generatorPromices);
