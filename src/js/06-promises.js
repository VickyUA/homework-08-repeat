import Notiflix from 'notiflix';

const promiseForm = document.querySelector('.form');

promiseForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  let delayForm = Number(form.elements.delay.value);
  const stepForm = Number(form.elements.step.value);
  const amountForm = Number(form.elements.amount.value);

  for (let i = 1; i <= amountForm; i += 1) {
    createPromise(i, delayForm)
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

    delayForm += stepForm;
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({
          position,
          delay,
        });
      } else {
        rej({
          position,
          delay,
        });
      }
    }, delay);
  });
}

// import Notiflix from 'notiflix';

// const promiseForm = document.querySelector('.form');

// promiseForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const delayForm = form.elements.delay.value;
//   const stepForm = form.elements.step.value;
//   const amountForm = form.elements.amount.value;

//   function createPromise(position, delay) {
//     return new Promise((res, rej) => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         res({
//           position,
//           delay,
//         });
//       } else {
//         rej({
//           position,
//           delay,
//         });
//       }
//     });
//   }

//   setTimeout(() => {
//     const timerId = setInterval(() => {
//       for (i = 0; i < amountForm; i += 1) {
//         position = i + 1;
//         delay = stepForm * position;

//         createPromise(position, delay)
//           .then(({ position, delay }) => {
//             Notiflix.Notify.success(
//               `✅ Fulfilled promise ${position} in ${delay}ms`
//             );
//           })
//           .catch(({ position, delay }) => {
//             Notiflix.Notify.failure(
//               `❌ Rejected promise ${position} in ${delay}ms`
//             );
//           });

//         if ((position = amountForm)) {
//           clearInterval(timerId);
//         }
//       }
//     }, stepForm);
//   }, delayForm);
// }
