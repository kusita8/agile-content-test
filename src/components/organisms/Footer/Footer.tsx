import packageJson from "src/../package.json";

import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <p>© Google 2023</p>
      <p>version: {packageJson.version}</p>
    </div>
  );
};
