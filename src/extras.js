export const fetchData = async (callback) =>
{
  var response = await fetch('https://api.1337co.de/v3/employees', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "api-key 14:2022-05-09:tina.nielsen@1337.tech 1f1f445b589522ce9192b70ef9738044e3470a522bba60101b6bbe500ec94f8e"
        }
    })
    .catch(err => console.warn('fetching data from 1337 failed', err));
    const json = await response.json();
    callback(json);
}

export const filterColleagueList = (colleague, filter) => {
  if (filter.searchString === '') {
    return true;
  }
  if (colleague[filter.toFilterBy] !== null && colleague[filter.toFilterBy].toLowerCase().includes(filter.searchString.toLowerCase())) {
    return true;
  }
  return false;
}