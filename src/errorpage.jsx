import { useRouteError } from 'react-router-dom';
import './errorpage.scss'
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
    <div class="outer-track">
  <div class="inner-track">
    <div class="tractor-container">
      <div class="tractor">
        <div class="body">
          <div class="light"></div>
          <div class="grill"></div>
          <div class="exhaust"></div>
          <div class="steering"></div>
          <div class="seat"></div>
          <div class="wheel-front"></div>
          <div class="fender"></div>
          <div class="wheel-back"></div>
          <div class="hitch"></div>
        </div>
      </div>
    </div>
    <div class="rope"></div>
    <div class="tractor-container">
      <div class="tractor">
        <div class="body">
          <div class="light"></div>
          <div class="grill"></div>
          <div class="exhaust"></div>
          <div class="steering"></div>
          <div class="seat"></div>
          <div class="wheel-front"></div>
          <div class="fender"></div>
          <div class="wheel-back"></div>
          <div class="hitch"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  );
}
