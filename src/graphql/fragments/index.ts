// hero
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

// project
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

// team
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

// services tabs
export const SERVICES_TABS_FRAGMENT = `
fragment ServicesTabsFragment on ComponentSectionsServicesTabs {
	tabs {
    label
    value
  }
  tabsContent{
    title
    key
    list
    image {
	    data {
	      attributes {
	        url
	      }
	    }
    }
    button
  }
}`;

// clients
export const CLIENTS_LOGO_FRAGMENT = `
fragment ClientsLogoFragment on ClientsLogoEntityResponse {
	data {
    attributes {
      clients {
        image {
          data {
            attributes {
              url
            }
          }
        }
        key
      }
    }
  }
}`;

// advantagesCards
export const ADVANTAGES_CARDS_FRAGMENT = `
fragment AdvantagesCardsFragment on ComponentSectionsAdvantagesHome {
	sectionName
	title {
    part1
    part2
    gradientPart
    color1
    color2
  }
  subTitle
  cards {
    title
    text
	  img {
	    data {
	      attributes {
	        url
	      }
	    }
	  }
	}
}`;

// feedbacks
export const CLIENT_FEEDBACK_FRAGMENT = `
fragment ClientFeedbackFragment on ComponentSectionsClientFeedback {
	sectionName
	title
	feedbacks {
		id
		author
		work
		company
		feedback
		avatar {
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
	}
}`;

// workTogether
export const WORK_TOGETHER_FRAGMENT = `
fragment WorkTogetherFragment on ComponentSectionsWorkTogether {
	title
	description
	backgroundImage {
		data {
			attributes {
				url
			}
		}
	}
	button {
		label
		icon {
			data {
				attributes {
					url
				}
			}
		}
	}
	cards {
		id
		image {
			data {
				attributes {
					url
				}
			}
		}
		count
		category
		backgroundColor
		group
	}
}`;

// ourService
export const OUR_SERVICE_FRAGMENT = `
fragment OurServiceFragment on ComponentSectionsOurService {
	sectionName
	title {
		part1
		part2
		gradientPart
		color1
		color2
	}
	cards {
		id
		title
		description
		area
		buttonLabel
		buttonIcon {
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
	}
}`;

// ourWork
export const OUR_WORK_FRAGMENT = `
fragment OurWorkFragment on ComponentSectionsOurWork {
	sectionName
	title {
		part1
		part2
		gradientPart
		color1
		color2
	}
	subTitle
}`;

// accordion
export const ACCORDION_FRAGMENT = `
fragment AccordionFragment on AccordionEntity {
	attributes {
    sectionName
    title {
      part1
      part2
      gradientPart
      color1
      color2
    }
    cards {
      id
      label
      hidedText
    }
  }
}`;
