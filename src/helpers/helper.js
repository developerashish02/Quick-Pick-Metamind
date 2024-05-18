export const truncateText = (text, length) => {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text;
};

export const LOGO =
  "https://imgs.search.brave.com/PN7iiN125r12uVyOIylegY6Ev_ZfL_AMd3Doy342yLo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzczLzYwLzQ4/LzM2MF9GXzQ3MzYw/NDg5MF92Szd2TkN6/ZjFqd2lDMjl1MzVx/aVB3clhWUkpwYjhQ/Ri5qcGc";
