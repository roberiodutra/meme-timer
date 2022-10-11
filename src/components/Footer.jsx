import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <footer className="footer">
      <GitHubIcon style={{ fontSize: "10px" }} />{" "}
      <span>
        Made by{" "}
        <a href="https://github.com/roberiodutra">
          @Roberio-Dutra
        </a>
      </span>
    </footer>
  );
}

export default Footer;
