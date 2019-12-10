export const base64ToImage = (base64Image, imageContainerId) => {
  let newImage = document.createElement('img');
  newImage.src = base64Image;
  newImage.width = newImage.height = '64';

  if (document.getElementById(imageContainerId) != null) {
    document.getElementById(imageContainerId).innerHTML = newImage.outerHTML;
  }
};

export const isBase64 = str => str.split(',').length === 2;

export const isPureBase64 = str => {
  try {
    return btoa(atob(str)) == str;
  } catch (err) {
    return false;
  }
};
