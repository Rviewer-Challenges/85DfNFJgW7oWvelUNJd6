import HomeIcon from "../../assets/icons/HomeIcon.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import BellIcon from "../../assets/icons/BellIcon.svg";
import MailIcon from "../../assets/icons/MailIcon.svg";

export const BottomNav: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black">
      <div className="h-[1px] bg-[#2F3336]"></div>
      <nav className="grid h-14 grid-cols-4 items-center justify-items-center">
        <a href="#">
          <img src={HomeIcon} alt="" />
        </a>
        <a href="#">
          <img src={SearchIcon} alt="" />
        </a>
        <a href="#">
          <img src={BellIcon} alt="" />
        </a>
        <a href="#">
          <img src={MailIcon} alt="" />
        </a>
      </nav>
    </footer>
  );
};
