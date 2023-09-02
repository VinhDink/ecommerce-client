import "../style/footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__box">
        <div class="footer__info">
          <p>&copy; {new Date().getFullYear()} Wepaid. All rights reserved.</p>
          <p>Wepaid Technology Corporation, a member of FPT Group</p>
          <p>
            Business Registration Number: 0312776486 - Date of issuance:
            13/05/2014, 20th amendment on 26/04/2022.
          </p>
          <p>
            Licensing authority: Ho Chi Minh City Department of Planning and
            Investment.
          </p>
          <p>
            Address: 100 Kim Ma, Ba Dinh, Ha Noi, Viet Nam - Tel: 024 7300 8855
            -
          </p>
          <p>Email: contact@wepaid.vn</p>
        </div>
        <div class="footer__social-media">
          <div>Follow us on</div>
          <ul class="footer__icon">
            <li><i class="bi bi-facebook"></i></li>
            <li><i class="bi bi-twitter"></i></li>
            <li><i class="bi bi-instagram"></i></li>
            <li><i class="bi bi-linkedin"></i></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
