export const HERO_FRAGMENT = `
fragment HeroFragment on ComponentSectionsHero {
  title {
    part1
    gradientPart
    part2
    color1
    color2
  }
  button {
    label
  }
  subTitle
  trust
  backgroundImage {
    data {
      attributes {
        url
      }
    }
  }
  backgroundBottomImage {
    data {
      attributes {
        url
      }
    }
  }
  image {
    data {
      attributes {
        url
      }
    }
  }
  socials {
    url
    label
    color
    ariaLabel
    icon {
      data {
        attributes {
          url
        }
      }
    }
  }
  cards {
    Title
    Text
  }
}`;

export const PROJECTS_FRAGMENT = `
fragment ProjectsFragment on SingleProjectEntity {
  id
  attributes {
    project_name
    description_text
    main_img {
      data {
        attributes {
          url
        }
      }
    }
    color
    site_url
    google_page_speed
    seo_title
    seo_description
  }
}`;

export const TEAM_FRAGMENT = `
fragment TeamFragment on TeamEntity {
  id
    attributes {
	    name
	    position
	    level
	    direction
	    price
	    preview_photo {
	      data {
	          attributes {
	            url
	          }
	        }
	    }
	    telegram
	    linkedin
	    english_level
	    email
	    direction
    }
}`;
