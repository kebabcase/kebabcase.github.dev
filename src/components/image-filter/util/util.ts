interface CanvasContext2D extends CanvasRenderingContext2D {
  filter: string;
}

export function downloadImage(file: File, filter: string): Promise<void> {
  return previewImage(file)
    .then((imageSrc) => getDataURI(imageSrc, filter))
    .then((imageURI) => dataURItoBlob(imageURI))
    .then((imageBlob) => {
      const link = document.createElement('a');
      link.setAttribute('href', URL.createObjectURL(imageBlob));
      link.setAttribute('download', file.name);
      link.setAttribute('target', '_blank');
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
}

function getDataURI(imageSrc: string, filter: string): Promise<string> {
  return new Promise((resolve) => {
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      const context = canvas.getContext('2d') as CanvasContext2D;

      // TODO: either use third party library or apply filter by pixel
      // for cross browser experience.
      context.filter = filter.length ? filter : 'none';
      context.drawImage(image, 0, 0);

      resolve(canvas.toDataURL('image/png'));
    };

    image.setAttribute('src', imageSrc);
  });
}

function dataURItoBlob(dataURI: string): Promise<Blob> {
  return new Promise((resolve) => {
    let byteString: string;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURI.split(',')[1]);
    } else {
      byteString = unescape(dataURI.split(',')[1]);
    }

    // Separate out the mime component
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // Write the bytes of the string to a typed array
    const intArray = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        intArray[i] = byteString.charCodeAt(i);
    }

    resolve(new Blob([intArray], {type: mimeString}));
  });
}

export function previewImage(image: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (isImage(image)) {
      // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
      const fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      // fileReader.onerror = (error) => {
      //   console.log(error);
      // };
      fileReader.readAsDataURL(image);
    } else {
      reject(`Expected an image file. Instead received ${image.type}`);
    }
  });
}

export function isImage(file: File): boolean {
  return /\.(jpe?g|png|gif)$/i.test(file.name);
}
