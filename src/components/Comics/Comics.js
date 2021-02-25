import 'regenerator-runtime/runtime';
import { API_URL, URL_COMICS, URL_CHARACTERS } from '../../const/api';
import { ROOT_MODAL, ROOT_INDEX, IMG_SIZE, NOT_IMG } from '../../const/root';
import getDataApi from '../../utils/getDataApi';
import Characters from '../Characters/Characters';
import Errors from '../Error/Error';
import './Comics.css';

const Comics = async () => {
  const data = await getDataApi(API_URL + URL_COMICS);

  const renderComics = () => {
    let htmlContent = '';
    data.forEach(({ id, title, thumbnail: { path, extension } }) => {
      if (path.lastIndexOf(NOT_IMG) === -1) {
        const url = `${API_URL}${URL_COMICS}/${id}/${URL_CHARACTERS}`;
        const imgPath = `${path}${IMG_SIZE}.${extension}`;
        htmlContent += `
      <div class="col-3 mb-5">
        <div class="comics_item" data-url="${url}">
          <div class="comics_item-title">${title}</div>
          <img src="${imgPath}" alt="" class="comics_item-img">
        </div>
      </div>
    `;
      }
    });
    const htmlWrapper = `
      <div class="row">
        ${htmlContent}
      </div>`;

    ROOT_INDEX.innerHTML += htmlWrapper;
  };

  !data ? Errors() : renderComics();

  (function () {
    document.querySelectorAll('.comics_item').forEach((item) => {
      const url = item.getAttribute('data-url');
      item.addEventListener('click', () => {
        Characters(url);
      });
    });
  })();
};

export default Comics;
