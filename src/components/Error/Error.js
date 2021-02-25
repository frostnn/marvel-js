import { ROOT_INDEX } from '../../const/root';
import './Error.css';
const Error = () => {
  const htmlWrapper = `
    <div class="error_block">
      <div class="error_block-text">Произошла ошибка</div>
      <div class="error_block-text">Попробуйте зайти позже</div>
    </div>
  `;

  ROOT_INDEX.innerHTML = htmlWrapper
}

export default Error