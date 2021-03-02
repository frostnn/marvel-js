import { IMG_SIZE, ROOT_MODAL } from '../../const/root';
import getDataApi from '../../utils/getDataApi';
import Comics from '../Comics/Comics';
import './Characters.css';

const Characters = async (url) => {
  const data = await getDataApi(url);

  const renderContent = (data) => {
    let htmlContent = '';
    data.forEach(({ name, thumbnail: { path, extension } }) => {
      const imgPath = `${path}${IMG_SIZE}.${extension}`;
      htmlContent += `
      
        <div class="character">
          <div class="character_img">
            <img src="${imgPath}" alt="">
          </div>
          <div class="character_name">
            ${name}
          </div>
        </div>
      
      `;
    });

    const htmlWrapper = `
      <div class="character_wrapper">
        <div class="character_container">
          ${htmlContent}
        </div>
        
      </div>
    `;

    ROOT_MODAL.innerHTML += htmlWrapper;
  };

  const renderNotification = () => {
    console.log('fail :(');
  };

  data.length ? renderContent(data) : renderNotification();
};

export default Characters;
