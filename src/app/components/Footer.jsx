import { Tweet } from "react-tweet";

export async function getServerSideProps() {}

function Footer() {
  return (
    <footer className="min-h-[96px]  flex items-center">
      <div className=" w-1/2 ">
        <h1>Contact</h1>
      </div>
      <div className=" w-1/2 flex justify-center" data-theme="light">
        <Tweet id="1634613367624089605" />
      </div>
    </footer>
  );
}

export default Footer;
