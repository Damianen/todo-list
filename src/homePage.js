export default function build() {
    const sideBar = document.createElement("div");
    sideBar.classList.add("side-bar");

    const main = document.createElement("div");
    main.classList.add("main");

    const createButton = document.createElement("button");

    const logoAndBtnDiv = document.createElement("div");

    logoAndBtnDiv.append(createButton);

    sideBar.append(logoAndBtnDiv);

    document.body.append(sideBar, main);
}