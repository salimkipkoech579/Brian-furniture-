/*
========================================
BRIAN FURNITURE BUSINESS INFORMATION
Edit the details below before launching
the website.
========================================
*/

// ========================================
// BUSINESS CONFIGURATION
// Replace the placeholder values below with
// your actual business information.
// No HTML or programming changes needed!
// ========================================

const businessInfo = {
    businessName: "Brian Furniture",
    tagline: "Crafted with Skill. Built to Last.",

    phone: "+254 742470137",
    whatsapp: "254742470137",
    email: "info@brianfurniture.com",

    location: "Your Workshop Location, Nairobi, Kenya",

    openingHours: {
        mondayFriday: "8:00 AM - 6:00 PM",
        saturday: "8:00 AM - 4:00 PM",
        sunday: "Closed"
    },

    socialMedia: {
        facebook: "https://www.facebook.com/profile.php?id=61580763238831",
        instagram: "https://instagram.com/victortech035",
        tiktok: "https://tiktok.com/kipkoech.victor8",
        youtube: "https://youtube.com/@kipkoechvictorhn2eo"
    },

    googleMaps: "https://maps.app.goo.gl/27UDsuyRcHLYcxH28"
};

// ========================================
// 15 COMPLETED WORKSHOP COMMISSIONS
// Handcrafted pieces by Brian Furniture
// ========================================
const portfolioProjects = [
    {
        id: "wa-0037",
        filename: "IMG-20261007-WA0037.jpg",
        title: "Dual Workshop Bedsteads: Royal Blue Tufted King & Natural Timber Spindle Bed",
        category: "Beds & Bedroom",
        timber: "Kiln-Dried Kenyan Hardwood & Cypress",
        finish: "Enamel White with Tufted Velvet & Golden Honey Lacquer",
        image: "/IMG-20261007-WA0037.jpg",
        description: "Frontal outdoor workshop showcase of two master commissioned bedframes: on the left, an upholstered king bed with royal blue diamond button tufting and matching footboard; on the right, a handcrafted solid timber bedstead with turned finials and spindle lattice rails.",
        completionTime: "7 Days",
        clientArea: "Nairobi Workshop Lawn",
        dimensions: "6ft x 6ft (King) & 5ft x 6ft (Queen)"
    },
    {
        id: "wa-0012",
        filename: "IMG-20261007-WA0012.jpg",
        title: "Handcrafted King Bed with Royal Blue Tufted Headboard",
        category: "Beds & Bedroom",
        timber: "Solid Kiln-Dried Timber & Pine Slats",
        finish: "Enamel Frame with Deep Diamond Button-Tufted Velvet",
        image: "/IMG-20261007-WA0012.jpg",
        description: "Commissioned king-size bedstead featuring royal blue button-tufted headboard with matching footboard upholstered panel, exposed timber posts, and squeak-free orthopedic slats.",
        completionTime: "7 Days",
        clientArea: "Nairobi",
        dimensions: "6ft x 6ft (King Size)"
    },
    {
        id: "wa-0011",
        filename: "IMG-20261007-WA0011.jpg",
        title: "Two-Tier Media Console with Lockable Key Drawers & Cabinet",
        category: "Living Room & TV Consoles",
        timber: "Engineered Wood with Hardwood Framing",
        finish: "Natural Woodgrain Texture with Azure Feet Accents",
        image: "/IMG-20261007-WA0011.jpg",
        description: "Multi-level entertainment unit with two lockable security drawers with brass handles, central decoder/soundbar shelf, and right-hand storage locker with key latch.",
        completionTime: "5 Days",
        clientArea: "Westlands, Nairobi",
        dimensions: "150cm L x 45cm W x 65cm H"
    },
    {
        id: "wa-0010",
        filename: "IMG-20261007-WA0010.jpg",
        title: "Coral Flared C-Leg Coffee Table with Lower Slatted Shelf",
        category: "Tables & Accent Pieces",
        timber: "Solid Seasoned Hardwood",
        finish: "Coral Satin Polyurethane Seal",
        image: "/IMG-20261007-WA0010.jpg",
        description: "Artisan occasional table with sweeping curved C-shaped flared legs, smooth rounded tabletop edges, and integrated slatted magazine/shoe shelf below.",
        completionTime: "4 Days",
        clientArea: "Karen, Nairobi",
        dimensions: "120cm L x 60cm W x 48cm H"
    },
    {
        id: "wa-0013",
        filename: "IMG-20261007-WA0013.jpg",
        title: "8-Compartment Wardrobe Closet with Top Clothes Hanging Rail",
        category: "Wardrobes & Storage",
        timber: "Solid Seasoned Pine & Plywood Backing",
        finish: "Protective Whitewash Dust-Seal",
        image: "/IMG-20261007-WA0013.jpg",
        description: "Floor-to-ceiling bedroom wardrobe organizer carcass featuring upper heavy-duty clothes hanging rail and 8 modular open cubby compartments for folded clothing, bedding, and shoes.",
        completionTime: "6 Days",
        clientArea: "Kilimani, Nairobi",
        dimensions: "210cm H x 120cm W x 55cm D"
    },
    {
        id: "wa-0009",
        filename: "IMG-20261007-WA0009.jpg",
        title: "Kitchen Prep Island & Vanity Counter with Basin Cutout",
        category: "Tables & Accent Pieces",
        timber: "Marine-Treated Hardwood Slabs",
        finish: "Waterproof Azure Blue Protective Enamel",
        image: "/IMG-20261007-WA0009.jpg",
        description: "Multi-purpose workshop utility table and kitchen prep island tailored with a circular basin cutout on top, and double slatted storage levels for easy drainage and airflow.",
        completionTime: "5 Days",
        clientArea: "Kitisuru, Nairobi",
        dimensions: "140cm L x 60cm W x 85cm H"
    },
    {
        id: "wa-0007",
        filename: "IMG-20261007-WA0007.jpg",
        title: "Golden Ochre Flared-Leg Coffee Table & Media Bench",
        category: "Tables & Accent Pieces",
        timber: "Kiln-Dried Hardwood",
        finish: "Warm Golden Ochre Smooth Lacquer",
        image: "/IMG-20261007-WA0007.jpg",
        description: "Warm-toned accent living room coffee table featuring sculpted arching legs, bottom slatted rack, and generous tabletop surface for tea and centerpiece decor.",
        completionTime: "4 Days",
        clientArea: "Lavington, Nairobi",
        dimensions: "120cm L x 60cm W x 48cm H"
    },
    {
        id: "wa-0006",
        filename: "IMG-20261007-WA0006.jpg",
        title: "Tufted King Bedstead (Side Perspective & Slatted Base)",
        category: "Beds & Bedroom",
        timber: "Kiln-Dried Kenyan Timber",
        finish: "Clean White Satin Finish with Velvet Inset",
        image: "/IMG-20261007-WA0006.jpg",
        description: "Detailed workshop view showing side rail mortise joints, slatted mattress foundation, high tufted headboard, and matching royal blue footboard panel.",
        completionTime: "7 Days",
        clientArea: "Nairobi Workshop",
        dimensions: "6ft x 6ft (King Size)"
    },
    {
        id: "wa-0003",
        filename: "IMG-20261007-WA0003.jpg",
        title: "Stacked Dual-Tier Curved Accent Tables (Orange & Coral)",
        category: "Tables & Accent Pieces",
        timber: "Solid Hardwood",
        finish: "Dual-Tone Coral & Tangerine Enamel",
        image: "/IMG-20261007-WA0003.jpg",
        description: "Pair of custom occasional tables demonstrated in stacked configuration, highlighting the balanced flared leg curve that allows modular grouping.",
        completionTime: "4 Days",
        clientArea: "Runda, Nairobi",
        dimensions: "100cm L x 50cm W x 45cm H"
    },
    {
        id: "wa-0001",
        filename: "IMG-20261007-WA0001.jpg",
        title: "4-Tier Slatted Footwear & Entryway Organizer Stand",
        category: "Wardrobes & Storage",
        timber: "Treated Kenyan Cypress",
        finish: "Vibrant Fuchsia Protective Enamel",
        image: "/IMG-20261007-WA0001.jpg",
        description: "Compact four-tier vertical storage rack with open horizontal timber slats engineered to keep shoes and household footwear dry, ventilated, and organized.",
        completionTime: "3 Days",
        clientArea: "Ruiru, Kiambu",
        dimensions: "95cm H x 80cm W x 32cm D"
    },
    {
        id: "wa-0002",
        filename: "IMG-20261007-WA0002.jpg",
        title: "Vibrant Fuchsia Wardrobe Closet with Slanted Shoe Deck",
        category: "Wardrobes & Storage",
        timber: "Selected Solid Timber",
        finish: "Magenta Velvet Finish with Slanted Slats",
        image: "/IMG-20261007-WA0002.jpg",
        description: "Custom painted wardrobe organizer fitted with upper clothes hanging rail, side stack of 4 cubby shelves, and angled bottom slatted shoe rack.",
        completionTime: "6 Days",
        clientArea: "Thika Road, Nairobi",
        dimensions: "200cm H x 110cm W x 50cm D"
    },
    {
        id: "wa-0008",
        filename: "IMG-20261007-WA0008.jpg",
        title: "Outdoor Utility Display Island & Multi-Tier Slatted Stand",
        category: "Tables & Accent Pieces",
        timber: "Weather-Treated Hardwood",
        finish: "UV-Resistant Protective Enamel",
        image: "/IMG-20261007-WA0008.jpg",
        description: "Custom commissioned outdoor wash counter and matching multi-tier slatted shelving rack completed for outdoor catering and workspace utility.",
        completionTime: "5 Days",
        clientArea: "Ngong, Kajiado",
        dimensions: "140cm L x 60cm W x 85cm H"
    },
    {
        id: "wa-0005",
        filename: "IMG-20261007-WA0005.jpg",
        title: "Golden Ochre Curved Table (Top Perspective)",
        category: "Tables & Accent Pieces",
        timber: "Solid Seasoned Hardwood",
        finish: "Smooth Honey Satin Lacquer",
        image: "/IMG-20261007-WA0005.jpg",
        description: "Elevated angle showing the generous plank tabletop, flush rounded perimeter edge, and lower storage deck.",
        completionTime: "4 Days",
        clientArea: "Karen, Nairobi",
        dimensions: "120cm L x 60cm W x 48cm H"
    },
    {
        id: "wa-0004",
        filename: "IMG-20261007-WA0004.jpg",
        title: "Multi-Tier Wardrobe Organizer (Side Frame Angle)",
        category: "Wardrobes & Storage",
        timber: "Kiln-Dried Pine & Timber Framing",
        finish: "Clean Workshop White Wash",
        image: "/IMG-20261007-WA0004.jpg",
        description: "Side perspective highlighting the sturdy upright partition dividing the clothes hanging zone and the stacked shelving compartments.",
        completionTime: "6 Days",
        clientArea: "Nairobi Workshop",
        dimensions: "210cm H x 120cm W x 55cm D"
    },
    {
        id: "wa-0000",
        filename: "IMG-20261007-WA0000.jpg",
        title: "8-Cubby Wardrobe Shelving Unit (Elevation View)",
        category: "Wardrobes & Storage",
        timber: "Selected Hardwood Framing",
        finish: "Protective Primer & Seal",
        image: "/IMG-20261007-WA0000.jpg",
        description: "Front elevation view showing symmetrical dual columns of 4 storage cubbies and upper hanging rod ready for bedroom installation.",
        completionTime: "6 Days",
        clientArea: "Nairobi Workshop",
        dimensions: "210cm H x 120cm W x 55cm D"
    }
];

/*
========================================
AUTOMATIC WEBSITE INJECTION ENGINE
========================================
*/

function cleanPhoneString(phone) {
    return phone.replace(/[^0-9+]/g, "");
}

function cleanWhatsAppString(wa) {
    return wa.replace(/[^0-9]/g, "");
}

function applyBusinessInformation() {
    // 1. Business Name & Tagline
    document.querySelectorAll("[data-business-name]").forEach(el => {
        el.textContent = businessInfo.businessName;
    });
    document.querySelectorAll("[data-business-tagline]").forEach(el => {
        el.textContent = businessInfo.tagline;
    });

    // 2. Phone Link & Display
    const cleanPhone = cleanPhoneString(businessInfo.phone);
    document.querySelectorAll("[data-business-phone]").forEach(el => {
        el.textContent = businessInfo.phone;
    });
    document.querySelectorAll("[data-phone-button]").forEach(el => {
        if (el.tagName === "A") {
            el.setAttribute("href", `tel:${cleanPhone}`);
        }
    });

    // 3. WhatsApp Link & Display
    const cleanWhatsApp = cleanWhatsAppString(businessInfo.whatsapp);
    const waMessage = encodeURIComponent(`Hello ${businessInfo.businessName}, I would like to request a quotation for custom furniture.`);
    const waUrl = `https://wa.me/${cleanWhatsApp}?text=${waMessage}`;
    document.querySelectorAll("[data-business-whatsapp]").forEach(el => {
        el.textContent = businessInfo.whatsapp;
    });
    document.querySelectorAll("[data-whatsapp-button]").forEach(el => {
        if (el.tagName === "A") {
            el.setAttribute("href", waUrl);
        }
    });

    // 4. Email Link & Display
    document.querySelectorAll("[data-business-email]").forEach(el => {
        el.textContent = businessInfo.email;
    });
    document.querySelectorAll("[data-email-link]").forEach(el => {
        if (el.tagName === "A") {
            el.setAttribute("href", `mailto:${businessInfo.email}`);
        }
    });

    // 5. Workshop Location & Google Maps Directions
    document.querySelectorAll("[data-business-location]").forEach(el => {
        el.textContent = businessInfo.location;
    });
    const mapUrl = (businessInfo.googleMaps && !businessInfo.googleMaps.includes("YOUR_GOOGLE_MAPS_LINK"))
        ? businessInfo.googleMaps
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.location)}`;
    document.querySelectorAll("[data-directions-button]").forEach(el => {
        if (el.tagName === "A") {
            el.setAttribute("href", mapUrl);
        }
    });

    // 6. Opening Hours
    document.querySelectorAll("[data-hours-mon-fri]").forEach(el => {
        el.textContent = businessInfo.openingHours.mondayFriday;
    });
    document.querySelectorAll("[data-hours-sat]").forEach(el => {
        el.textContent = businessInfo.openingHours.saturday;
    });
    document.querySelectorAll("[data-hours-sun]").forEach(el => {
        el.textContent = businessInfo.openingHours.sunday;
    });

    // 7. Social Media Links
    document.querySelectorAll("[data-social-facebook]").forEach(el => {
        if (el.tagName === "A") el.setAttribute("href", businessInfo.socialMedia.facebook);
    });
    document.querySelectorAll("[data-social-instagram]").forEach(el => {
        if (el.tagName === "A") el.setAttribute("href", businessInfo.socialMedia.instagram);
    });
    document.querySelectorAll("[data-social-tiktok]").forEach(el => {
        if (el.tagName === "A") el.setAttribute("href", businessInfo.socialMedia.tiktok);
    });
    document.querySelectorAll("[data-social-youtube]").forEach(el => {
        if (el.tagName === "A") el.setAttribute("href", businessInfo.socialMedia.youtube);
    });

    // Check placeholder notices
    const isPlaceholder = businessInfo.location.includes("YOUR WORKSHOP") || businessInfo.phone.includes("XXX");
    const placeholderNotice = document.getElementById("ownerPlaceholderNotice");
    if (placeholderNotice) {
        placeholderNotice.style.display = isPlaceholder ? "block" : "none";
    }
}

// ========================================
// MASONRY GALLERY RENDERER & LIGHTBOX
// ========================================
let currentFilter = "All";

function renderMasonryGallery(filter = "All") {
    const grid = document.getElementById("masonryGalleryGrid");
    if (!grid) return;

    const filtered = filter === "All"
        ? portfolioProjects
        : portfolioProjects.filter(p => p.category === filter);

    const cleanWa = cleanWhatsAppString(businessInfo.whatsapp);

    grid.innerHTML = filtered.map(proj => {
        const itemWaUrl = `https://wa.me/${cleanWa}?text=${encodeURIComponent(
            `Hello ${businessInfo.businessName}, I saw project "${proj.title}" (${proj.filename}) in your portfolio gallery. I would like to request a quotation for a similar piece.`
        )}`;

        return `
            <div class="masonry-card" data-category="${proj.category}">
                <div class="masonry-img-wrapper" onclick="openLightbox('${proj.id}')">
                    <img src="${proj.image}" alt="${proj.title}" class="masonry-img" loading="lazy" referrerpolicy="no-referrer">
                    <span class="masonry-badge-file">${proj.filename}</span>
                    <span class="masonry-badge-category">${proj.category}</span>
                </div>
                <div class="masonry-card-body">
                    <h3 class="masonry-card-title" onclick="openLightbox('${proj.id}')">${proj.title}</h3>
                    <p class="masonry-card-desc">${proj.description}</p>
                    <div class="masonry-card-specs">
                        <div><strong>Timber:</strong> ${proj.timber}</div>
                        <div><strong>Lead Time:</strong> Delivered in ${proj.completionTime} · ${proj.clientArea}</div>
                    </div>
                    <div class="masonry-card-actions">
                        <a href="${itemWaUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="padding: 0.5rem 0.75rem; font-size: 0.75rem;">
                            WhatsApp Quote
                        </a>
                        <button onclick="openLightbox('${proj.id}')" class="btn btn-secondary" style="padding: 0.5rem 0.75rem; font-size: 0.75rem;">
                            Inspect Details
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

function filterGallery(category, btnElement) {
    currentFilter = category;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    if (btnElement) btnElement.classList.add("active");
    renderMasonryGallery(category);
}

function openLightbox(projectId) {
    const proj = portfolioProjects.find(p => p.id === projectId);
    if (!proj) return;

    const modal = document.getElementById("projectLightboxModal");
    const cleanWa = cleanWhatsAppString(businessInfo.whatsapp);
    const cleanPhone = cleanPhoneString(businessInfo.phone);

    const waUrl = `https://wa.me/${cleanWa}?text=${encodeURIComponent(
        `Hello ${businessInfo.businessName}, I would like to order/inquire about project: "${proj.title}" (${proj.filename}).`
    )}`;

    document.getElementById("modalImg").src = proj.image;
    document.getElementById("modalTitle").textContent = proj.title;
    document.getElementById("modalDesc").textContent = proj.description;
    document.getElementById("modalTimber").textContent = proj.timber;
    document.getElementById("modalFinish").textContent = proj.finish;
    document.getElementById("modalDimensions").textContent = proj.dimensions;
    document.getElementById("modalWaLink").href = waUrl;
    document.getElementById("modalWaLink").textContent = `Order ${proj.filename} on WhatsApp`;
    document.getElementById("modalPhoneLink").href = `tel:${cleanPhone}`;

    if (modal) {
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    }
}

function closeLightbox() {
    const modal = document.getElementById("projectLightboxModal");
    if (modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }
}

// Close lightbox on backdrop click
document.addEventListener("click", (e) => {
    const modal = document.getElementById("projectLightboxModal");
    if (modal && e.target === modal) {
        closeLightbox();
    }
});

// Close lightbox on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    applyBusinessInformation();
    renderMasonryGallery("All");
});

// Export if consumed by modules
if (typeof module !== "undefined" && module.exports) {
    module.exports = { businessInfo, portfolioProjects };
}
