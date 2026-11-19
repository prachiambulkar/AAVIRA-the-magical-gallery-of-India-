/* =========================================================
   AAVIRA — COMPLETE 99-PHOTO GALLERY
   Image folder: images/
   ========================================================= */


/* -------------------- 1. REMOVED PHOTOS -------------------- */

const removedPhotos = new Set([
    "heritage_021", "heritage_022", "heritage_027",
    "heritage_028", "heritage_036", "heritage_042",
    "heritage_048", "heritage_049", "heritage_053",
    "heritage_056", "heritage_060", "heritage_070",
    "portraits_008", "portraits_022", "portraits_024",
    "portraits_027", "portraits_028", "portraits_029"
]);


/* -------------------- 2. PHOTO IDS -------------------- */

const photoIds = [
    ...Array.from(
        { length: 87 },
        (_, i) => `heritage_${String(i + 1).padStart(3, "0")}`
    ),
    ...Array.from(
        { length: 30 },
        (_, i) => `portraits_${String(i + 1).padStart(3, "0")}`
    )
].filter(id => !removedPhotos.has(id));


/* -------------------- 3. PHOTO TITLES -------------------- */

const photoTitles = [
    "Grace Within Tradition",
    "The Rhythm of the Marketplace",
    "A Sea of Saffron",
    "A Doorway of Celebration",
    "Carrying the Colours of a Festival",
    "The Keeper of the Celebration",
    "An Offering of Everyday Grace",
    "A Glimpse into the Past",
    "The Gathering of Celebration",
    "Life Along the Street",
    "A Portrait of Tradition",
    "The Language of Living Culture",
    "Faces of a Living Heritage",
    "Crafted by Hand",
    "Architecture of Another Era",
    "The Colours of Celebration",
    "The Everyday Journey",
    "A Moment Worth Remembering",
    "A Street Full of Stories",
    "Traditions We Carry",
    "The Life of the Street",
    "The Beauty of Handmade Things",
    "Patterns of Heritage",
    "A Legacy Made by Hand",
    "The Craft of Patience",
    "Tradition in Every Texture",
    "Made with Meaning",
    "The Beauty of Detail",
    "Where the Earth Breathes",
    "A Quiet Place Beyond the Noise",
    "The Poetry of the Landscape",
    "The Stillness of Green",
    "A Journey Through Nature",
    "Beyond the Familiar Path",
    "The World in a Quiet Moment",
    "A Celebration of Togetherness",
    "Between Old Walls and New Lives",
    "An Expression of Imagination",
    "A Place of Reverence",
    "The Spirit of a Gathering",
    "The Grandeur of Stone",
    "Art That Outlives Time",
    "The Joy of Celebration",
    "A Heritage of Togetherness",
    "The Heart of a Festival",
    "Symbols of the Sacred",
    "Customs Across Generations",
    "The Memory of a Community",
    "Architecture of Devotion",
    "A Sacred Space in Time",
    "A Portrait of Presence",
    "Stories Written in Symbols",
    "The Grandeur of Heritage",
    "The Road Less Remembered",
    "The People Behind the Heritage",
    "A Testament in Stone",
    "Tradition in Celebration",
    "The Continuity of Culture",
    "A Journey into the Unknown",
    "The Canvas of Culture",
    "A Tradition of Belonging",
    "The Stories We Inherit",
    "The Art of Imagination",
    "A Place of Quiet Devotion",
    "The Craft of Creation",
    "A Legacy of Devotion",
    "Echoes of Royal Architecture",
    "Art Beyond the Ordinary",
    "The World of Myth and Meaning",
    "The Grandeur of the Past",
    "A Study in Architectural Detail",
    "The Language of Architecture",
    "Creativity Across Generations",
    "Sacred Stories in Stone",
    "A Monument to Memory",
    "Faces That Tell Stories",
    "An Expression of Grace",
    "The Beauty of Presence",
    "Tradition in Every Detail",
    "A Moment of Reflection",
    "The Spirit of a Generation",
    "The Language of Expression",
    "A Story Without Words",
    "The Human Connection",
    "The Quiet Strength of Character",
    "Heritage Through Human Stories",
    "A Glimpse of Everyday Life",
    "The Colours of Identity",
    "A Face from the Archive",
    "The Grace of Tradition",
    "Moments That Remain",
    "The Faces of Diversity",
    "The Art of Being Seen",
    "Echoes of Everyday India",
    "A Moment of Individuality",
    "The Beauty of a Fleeting Moment",
    "The Human Side of Heritage",
    "An Unwritten Story",
    "The Lasting Human Story"
];


/* -------------------- 4. PHOTO CATEGORIES -------------------- */

const photoCategories = [
    "people",
    "streets",
    "festivals",
    "festivals",
    "festivals",
    "festivals",
    "people",
    "people",
    "festivals",
    "streets",
    "people",
    "culture",
    "people",
    "crafts",
    "architecture",
    "festivals",
    "streets",
    "people",
    "streets",
    "culture",
    "streets",
    "crafts",
    "crafts",
    "crafts",
    "crafts",
    "crafts",
    "crafts",
    "crafts",
    "nature travel",
    "nature travel",
    "nature travel",
    "nature",
    "nature travel",
    "nature travel",
    "nature travel",
    "festivals",
    "streets",
    "arts",
    "temples",
    "festivals",
    "architecture",
    "arts",
    "festivals",
    "culture",
    "festivals",
    "mythology",
    "culture",
    "culture",
    "temples",
    "temples",
    "people",
    "mythology",
    "architecture",
    "streets travel",
    "people",
    "architecture",
    "festivals temples",
    "culture",
    "travel",
    "arts",
    "culture",
    "culture",
    "arts",
    "temples",
    "crafts",
    "temples",
    "architecture",
    "arts",
    "mythology",
    "architecture",
    "architecture",
    "architecture",
    "arts",
    "temples mythology",
    "architecture temples",
    "people portraits",
    "people portraits",
    "people portraits",
    "people portraits culture",
    "people portraits",
    "people portraits culture",
    "people portraits",
    "people portraits",
    "people portraits",
    "people portraits",
    "people portraits culture",
    "people portraits",
    "people portraits culture",
    "people portraits",
    "people portraits culture",
    "people portraits",
    "people portraits culture",
    "people portraits",
    "people portraits culture",
    "people portraits",
    "people portraits",
    "people portraits culture",
    "people portraits",
    "people portraits culture"
];


/* -------------------- 5. CATEGORY NORMALISATION -------------------- */

const categoryAliases = {
    "all": "all",
    "all collections": "all",

    "royal palaces architecture": "architecture",
    "architecture": "architecture",

    "temples heritage": "temples",
    "temples": "temples",

    "festivals traditions": "festivals",
    "festivals": "festivals",

    "nature landscapes": "nature",
    "nature": "nature",

    "indian streets": "streets",
    "streets": "streets",

    "people portraits": "portraits",
    "people": "portraits",
    "portrait": "portraits",
    "portraits": "portraits",

    "art craftsmanship": "crafts",
    "craftsmanship": "crafts",
    "arts": "crafts",
    "crafts": "crafts",

    "mythology": "mythology",

    "travel hidden places": "travel",
    "travel": "travel",

    "culture": "culture"
};

function normaliseCategory(value) {
    const key = String(value || "all")
        .toLowerCase()
        .replace(/&/g, " ")
        .replace(/[^a-z0-9]+/g, " ")
        .trim()
        .replace(/\s+/g, " ");

    return categoryAliases[key] || key;
}


/* -------------------- 6. VALIDATE DATA -------------------- */

if (photoIds.length !== 99) {
    console.error("AAVIRA: Expected 99 image IDs, found", photoIds.length);
}

if (photoTitles.length !== photoIds.length) {
    console.error(
        "AAVIRA: Title count does not match image count.",
        photoTitles.length,
        photoIds.length
    );
}

if (photoCategories.length !== photoIds.length) {
    console.error(
        "AAVIRA: Category count does not match image count.",
        photoCategories.length,
        photoIds.length
    );
}


/* -------------------- 7. CREATE PHOTO DATA -------------------- */

const photos = photoIds.map((id, index) => {
    const title = photoTitles[index] || id.replace(/_/g, " ");

    const categories = [
        ...new Set(
            (photoCategories[index] || "architecture")
                .split(/\s+/)
                .map(normaliseCategory)
                .filter(category => category !== "all")
        )
    ];

    const tags = [
        ...new Set([
            ...categories,
            ...title.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)
        ])
    ];

    return {
        id,
        image: `images/${id}.jpeg`,
        title,
        location: "Location not yet identified",
        subject: title,

        description:
            `Explore ${title.toLowerCase()} through this photograph from the AAVIRA visual archive.`,

        story:
            `This photograph, titled "${title}", is part of AAVIRA's collection of Indian heritage, culture and human stories. Notice the details, atmosphere and visual memories preserved in the frame.`,

        significance:
            "This photograph contributes to a wider visual record of culture, identity, creativity and shared memory.",

        categories,
        tags
    };
});


/* -------------------- 8. MAIN WEBSITE -------------------- */

document.addEventListener("DOMContentLoaded", () => {

    const gallery = document.getElementById("gallery-grid");
    const searchInput = document.getElementById("search-input");
    const filterButtons = document.querySelectorAll(".filter-btn");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");

    const closeButton = document.getElementById("lightbox-close");
    const prevButton = document.getElementById("lightbox-prev");
    const nextButton = document.getElementById("lightbox-next");

    const themeToggle = document.getElementById("theme-toggle");

    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (!gallery) {
        console.error('AAVIRA: Missing element with id "gallery-grid".');
        return;
    }

    let activeCategory = "all";
    let visiblePhotos = [...photos];
    let currentIndex = 0;
    let favourites = [];


    /* -------------------- 9. FAVOURITES -------------------- */

    try {
        const saved = JSON.parse(
            localStorage.getItem("aavira-favourites") || "[]"
        );

        favourites = Array.isArray(saved)
            ? saved.filter(id => photoIds.includes(id))
            : [];

    } catch (error) {
        favourites = [];
    }

    function saveFavourites() {
        try {
            localStorage.setItem(
                "aavira-favourites",
                JSON.stringify(favourites)
            );
        } catch (error) {
            console.warn("AAVIRA: Favourites could not be saved.");
        }
    }


    /* -------------------- 10. CATEGORY FILTER -------------------- */

    function matchesCategory(photo, category) {
        if (category === "all") {
            return true;
        }

        return photo.categories.includes(category);
    }


    /* -------------------- 11. SEARCH -------------------- */

    function matchesSearch(photo, query) {
        if (!query) {
            return true;
        }

        const searchableText = [
            photo.id,
            photo.title,
            photo.location,
            photo.subject,
            photo.description,
            photo.story,
            photo.significance,
            ...photo.tags,
            ...photo.categories
        ].join(" ").toLowerCase();

        return searchableText.includes(query);
    }


    /* -------------------- 12. DISPLAY GALLERY -------------------- */

    function displayPhotos() {

        const query = searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";

        visiblePhotos = photos.filter(photo =>
            matchesCategory(photo, activeCategory) &&
            matchesSearch(photo, query)
        );

        gallery.replaceChildren();

        if (!visiblePhotos.length) {
            const empty = document.createElement("div");
            empty.className = "no-results";

            const heading = document.createElement("h3");
            heading.textContent = "No photographs found";

            const message = document.createElement("p");
            message.textContent =
                "Try another search or explore a different collection.";

            empty.append(heading, message);
            gallery.appendChild(empty);
            return;
        }

        visiblePhotos.forEach((photo, index) => {

            const isFavourite = favourites.includes(photo.id);

            const card = document.createElement("article");
            card.className = "photo-card";
            card.dataset.photoId = photo.id;
            card.tabIndex = 0;
            card.setAttribute("aria-label", `Explore ${photo.title}`);

            const imageWrap = document.createElement("div");
            imageWrap.className = "photo-image-wrap";

            const image = document.createElement("img");
            image.src = photo.image;
            image.alt = photo.title;
            image.loading = "lazy";
            image.decoding = "async";

            image.addEventListener("error", () => {
                image.alt = `Image file unavailable: ${photo.image}`;
                image.classList.add("image-error");
            });

            const favouriteButton = document.createElement("button");
            favouriteButton.className = "favorite-btn";
            favouriteButton.type = "button";
            favouriteButton.textContent = isFavourite ? "♥" : "♡";

            favouriteButton.setAttribute(
                "aria-label",
                isFavourite ? "Remove from favourites" : "Add to favourites"
            );

            favouriteButton.setAttribute(
                "aria-pressed",
                String(isFavourite)
            );

            const overlay = document.createElement("div");
            overlay.className = "photo-overlay";

            const overlayText = document.createElement("span");
            overlayText.textContent = "EXPLORE STORY";

            overlay.appendChild(overlayText);

            imageWrap.append(
                image,
                favouriteButton,
                overlay
            );

            const info = document.createElement("div");
            info.className = "photo-card-info";

            const categoryLabel = document.createElement("p");
            categoryLabel.className = "photo-card-category";
            categoryLabel.textContent = photo.categories.join(" · ");

            const title = document.createElement("h3");
            title.textContent = photo.title;

            const description = document.createElement("p");
            description.textContent = photo.description;

            info.append(
                categoryLabel,
                title,
                description
            );

            card.append(imageWrap, info);

            card.addEventListener("click", () => {
                openLightbox(index);
            });

            card.addEventListener("keydown", event => {
                if (event.target !== card) return;

                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openLightbox(index);
                }
            });

            favouriteButton.addEventListener("click", event => {

                event.stopPropagation();

                if (favourites.includes(photo.id)) {
                    favourites = favourites.filter(id => id !== photo.id);
                } else {
                    favourites.push(photo.id);
                }

                saveFavourites();
                displayPhotos();
            });

            gallery.appendChild(card);
        });
    }


    /* -------------------- 13. STORY PANEL -------------------- */

    function storyPanel() {

        if (!lightbox) {
            return null;
        }

        let panel = lightbox.querySelector(".lightbox-story");

        if (!panel) {
            panel = document.createElement("div");
            panel.className = "lightbox-story";
            lightbox.appendChild(panel);
        }

        return panel;
    }


    /* -------------------- 14. UPDATE LIGHTBOX -------------------- */

    function updateLightbox() {

        const photo = visiblePhotos[currentIndex];

        if (!photo || !lightboxImage) {
            return;
        }

        lightboxImage.src = photo.image;
        lightboxImage.alt = photo.title;

        if (lightboxCaption) {
            lightboxCaption.textContent = photo.title;
        }

        const panel = storyPanel();

        if (!panel) {
            return;
        }

        panel.replaceChildren();

        const content = document.createElement("div");
        content.className = "story-panel-content";

        const eyebrow = document.createElement("p");
        eyebrow.className = "story-eyebrow";
        eyebrow.textContent = "AAVIRA ARCHIVE";

        const heading = document.createElement("h2");
        heading.textContent = photo.title;

        const location = document.createElement("p");
        location.className = "story-location";
        location.textContent = photo.location;

        const divider = document.createElement("div");
        divider.className = "story-divider";

        const photoHeading = document.createElement("h3");
        photoHeading.textContent = "The Photograph";

        const description = document.createElement("p");
        description.textContent = photo.description;

        const storyHeading = document.createElement("h3");
        storyHeading.textContent = "The Story";

        const story = document.createElement("p");
        story.textContent = photo.story;

        const significanceHeading = document.createElement("h3");
        significanceHeading.textContent = "Cultural Significance";

        const significance = document.createElement("p");
        significance.textContent = photo.significance;

        const tagsContainer = document.createElement("div");
        tagsContainer.className = "story-tags";

        photo.tags.forEach(tag => {
            const tagElement = document.createElement("span");
            tagElement.className = "story-tag";
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });

        const counter = document.createElement("p");
        counter.className = "story-counter";
        counter.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ` +
            `${String(visiblePhotos.length).padStart(2, "0")}`;

        content.append(
            eyebrow,
            heading,
            location,
            divider,
            photoHeading,
            description,
            storyHeading,
            story,
            significanceHeading,
            significance,
            tagsContainer,
            counter
        );

        panel.appendChild(content);
    }


    /* -------------------- 15. OPEN LIGHTBOX -------------------- */

    function openLightbox(index) {

        if (!lightbox || !lightboxImage || !visiblePhotos.length) {
            return;
        }

        currentIndex = index;

        updateLightbox();

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");

        document.body.classList.add("viewer-open");

        if (closeButton) {
            closeButton.focus();
        }
    }


    /* -------------------- 16. CLOSE LIGHTBOX -------------------- */

    function closeLightbox() {

        if (!lightbox) {
            return;
        }

        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");

        document.body.classList.remove("viewer-open");
    }


    /* -------------------- 17. PREVIOUS PHOTO -------------------- */

    function showPrevious() {

        if (!visiblePhotos.length) {
            return;
        }

        currentIndex =
            (currentIndex - 1 + visiblePhotos.length) %
            visiblePhotos.length;

        updateLightbox();
    }


    /* -------------------- 18. NEXT PHOTO -------------------- */

    function showNext() {

        if (!visiblePhotos.length) {
            return;
        }

        currentIndex =
            (currentIndex + 1) % visiblePhotos.length;

        updateLightbox();
    }


    /* -------------------- 19. FILTER BUTTONS -------------------- */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            activeCategory = normaliseCategory(
                button.dataset.category || button.textContent.trim()
            );

            filterButtons.forEach(item => {
                item.classList.remove("active");
                item.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            displayPhotos();
        });
    });


    /* -------------------- 20. SEARCH EVENT -------------------- */

    if (searchInput) {
        searchInput.addEventListener("input", displayPhotos);
    }


    /* -------------------- 21. LIGHTBOX BUTTONS -------------------- */

    if (closeButton) {
        closeButton.addEventListener("click", closeLightbox);
    }

    if (prevButton) {
        prevButton.addEventListener("click", showPrevious);
    }

    if (nextButton) {
        nextButton.addEventListener("click", showNext);
    }

    if (lightbox) {

        lightbox.addEventListener("click", event => {

            if (event.target === lightbox) {
                closeLightbox();
            }
        });
    }


    /* -------------------- 22. KEYBOARD CONTROLS -------------------- */

    document.addEventListener("keydown", event => {

        if (!lightbox || !lightbox.classList.contains("active")) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowLeft") {
            showPrevious();
        }

        if (event.key === "ArrowRight") {
            showNext();
        }
    });


    /* -------------------- 23. DARK MODE -------------------- */

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            const dark = document.body.classList.contains("dark-mode");

            themeToggle.textContent = dark ? "☀" : "☾";

            themeToggle.setAttribute(
                "aria-label",
                dark ? "Switch to light mode" : "Switch to dark mode"
            );
        });
    }


    /* -------------------- 24. CONTACT FORM -------------------- */

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            if (formStatus) {
                formStatus.textContent =
                    "Thank you for reaching out. Your message has been noted in this demo.";
            }

            contactForm.reset();
        });
    }


    /* -------------------- 25. INITIALISE GALLERY -------------------- */

    const allButton = [...filterButtons].find(button =>
        normaliseCategory(
            button.dataset.category || button.textContent.trim()
        ) === "all"
    );

    if (allButton) {

        filterButtons.forEach(button => {
            button.classList.remove("active");
            button.setAttribute("aria-pressed", "false");
        });

        allButton.classList.add("active");
        allButton.setAttribute("aria-pressed", "true");
    }

    displayPhotos();

    console.log(
        `AAVIRA gallery initialised: ${photos.length} photo records.`
    );

});