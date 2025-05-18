import axios from 'axios';

export async function fetchQuery(query, page) {
  try {
    return await axios
      .get('https://pixabay.com/api/', {
        params: {
          key: '41535540-3e2fcae5f9a93b6d79476b27b',
          q: query,
          page: page,
          per_page: 40,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: 'true',
        },
      })
      .then(({ data }) => data);
  } catch (error) {
    console.error(error);
  }

  //   return response;
}

// export function fetchQuery() {
//   return axios
//     .get('https://pixabay.com/api/', {
//       params: {
//         key: '41535540-3e2fcae5f9a93b6d79476b27b',
//         q: 'cat',
//         page: 2,
//         per_page: 40,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true',
//       },
//     })
//     .then(({ data }) => data);
// }
