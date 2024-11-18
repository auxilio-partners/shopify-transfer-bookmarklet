// Add header column
(() => {
    const headerRow = document.querySelector(
        "table.Polaris-DataTable__Table thead tr",
    );
    const headerCell = headerRow.firstChild.cloneNode(false);
    headerCell.textContent = "Image";
    headerRow.prepend(headerCell);

    // Add footer column
    const footerRow = document.querySelector(
        "table.Polaris-DataTable__Table tfoot tr",
    );
    const footerCell = footerRow.firstChild.cloneNode(false);
    footerRow.prepend(footerCell);

    // Find Thumbnails
    let thumbnails = document.querySelectorAll("[class^='_Thumbnail']");

    // Insert row columns
    document.querySelectorAll(
        ".Polaris-DataTable__TableRow",
    ).forEach((tr, i) => {
        const th = tr.firstChild.cloneNode(false);
        const thumbnail = thumbnails[i].cloneNode(true);
        thumbnail.setAttribute("class", "");
        thumbnail.querySelector("span.Polaris-Thumbnail").classList.replace(
            "Polaris-Thumbnail--sizeSmall",
            "Polaris-Thumbnail--sizeLarge",
        );
        th.appendChild(thumbnail);
        tr.prepend(th);
    });

    window.print();
})();
