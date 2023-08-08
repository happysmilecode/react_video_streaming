import { SubLayout } from "../../components/Layout/SubLayout";
import { MainLayout } from "../../components/Layout/MainLayout";
import "../../styles/dashboard/index.scss";
import LogoImg from "../../assets/logo.png";
import { LevelButton } from "./component/Button";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/Elements/Title";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <header>
        <button className="btn-back">ダッシュボードへもどる</button>
      </header>
      <SubLayout>
        <div className="col-md-12">
          <img src={LogoImg} alt="logo"></img>
        </div>
        <Title title={"学年を選ぶ"} />
        <div className="col-md-12 mt-5 p-3 content">
          <div className="row p-3">
            <div className="col">
              <LevelButton level={"1"} />
            </div>
            <div className="col">
              <LevelButton level={"2"} />
            </div>
          </div>
          <div className="row p-3">
            <div className="col">
              <LevelButton level={"3"} />
            </div>
            <div className="col">
              <LevelButton level={"4"} />
            </div>
          </div>
          <div className="row p-3">
            <div className="col">
              <LevelButton level={"5"} />
            </div>
            <div className="col">
              <LevelButton level={"6"} />
            </div>
          </div>
          <div className="row p-3 mt-3">
            <div className="col-10"></div>
            <div className="col-2">
              <button
                className="btn-about"
                onClick={() => navigate("/videos/5")}
              >
                <span className="btn-span">こ利用について</span>
              </button>
            </div>
          </div>
        </div>
      </SubLayout>
    </MainLayout>
  );
};
