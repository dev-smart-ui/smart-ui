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
	description
}`;

// whoWeAre
export const WHO_WE_ARE_FRAGMENT = `
fragment WhoWeAreFragment on ComponentSectionsWhoWeAre {
	sectionName
	title {
		part1
		part2
		gradientPart
		color1
		color2
	}
	description
}`;

// goalsAndValuesSection
export const GOALS_AND_VALUES_FRAGMENT = `
fragment GoalsAndValuesFragment on ComponentSectionsGoalsAndValues {
	cards {
		Img {
			data {
				attributes {
					url
				}
			}
		}
		Title
		Text
	}
}`;

// ourExpertsSection
export const OUR_EXPERTS_FRAGMENT = `
fragment OurExpertsFragment on ComponentSectionsOurExperts {
	sectionName
	title {
		part1
		part2
		gradientPart
		color1
		color2
	}
	description
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

// contactForm
export const CONTACT_FORM_FRAGMENT = `
fragment ContactFormFragment on ContactFormEntity {
	attributes {
		backgroundImage {
			data {
				attributes {
					url
				}
			}
		}
		logo {
			data {
				attributes {
					url
				}
			}
		}
		socialsLabel
		title
		subTitle
		socials {
			id
			label
			color
			ariaLabel
			url
			icon {
				data {
					attributes {
						url
					}
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
	}
}`;

// header
export const HEADER_FRAGMENT = `
fragment HeaderFragment on HeaderEntity {
	attributes {
		logo {
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
		links {
			id
			label
			path
			subMenuLinks {
				id
				label
				desc
				path
				gridArea
				icon {
					data {
						attributes {
							url
						}
					}
				}
			}
		}
	}
}`;

// footer
export const FOOTER_FRAGMENT = `
fragment FooterFragment on FooterEntity {
	attributes {
		infoDescription
		linksTitle
		servicesTitle
		logo {
			data {
				attributes {
					url
				}
			}
		}
		info {
			id
			icon {
				data {
					attributes {
						url
					}
				}
			}
			url
			label
		}
		links {
			id
			text
			url
		}
		services {
			id
			text
			url
		}
		socials {
			id
			icon {
				data {
					attributes {
						url
					}
				}
			}
			url
			label
			color
			ariaLabel
		}
	}
}`;

// forAgencyHero
export const HERO_FOR_AGENCY_FRAGMENT = `
fragment HeroForAgencyFragment on ComponentSectionsHeroForAgency {
	sectionName
  smallImage {
    data {
      attributes {
        url
      }
    }
  }
  topSmallText
  title
  description
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
  image {
    data {
      attributes {
        url
      }
    }
  }
}`;

// advantages forAgency
export const ADVANTAGES_FOR_AGENCY_FRAGMENT = `
fragment AdvantagesForAgencyFragment on ComponentSectionsAdvantagesForAgency {
	sectionName
	title
	description
	cards {
		Title
		Text
	}
	solutionTitle
	solutionIcon {
		data {
			attributes {
				url
			}
		}
	}
	solutionDescription
	solutionsList {
		id
		text
		icon {
			data {
				attributes {
					url
				}
			}
		}
	}
}`;

// advantages forAgency
export const QUESTION_SECTION_FRAGMENT = `
fragment QuestionSectionFragment on ComponentSectionsQuestionSection {
	title
	text
	image {
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
	bgImage {
			data {
				attributes {
					url
				}
			}
		}
}`;

// whatWeDo forAgency
export const WHAT_WE_CAN_DO_SECTION_FRAGMENT = `
fragment whatWeCanDoFragment on ComponentSectionsWhatWeCanDo {
	sectionName
	title {
		part1
		part2
		gradientPart
		color1
		color2
	}
	description
	cards {
		title
		icon {
			data {
				attributes {
					url
				}
			}
		}
		stackList
	}
	bottomTitle
	bottomText
	bottomButton {
		label
		icon {
			data {
				attributes {
					url
				}
			}
		}
	}
}`;

// approaches
export const APPROACHES_FRAGMENT = `
fragment ApproachesFragment on ComponentSectionsApproaches {
	sectionName
	title
	description
	cards {
		id
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

// workAndCollaborate
export const WORK_AND_COLLABORATE_FRAGMENT = `
fragment WorkAndCollaborateFragment on ComponentSectionsWorkAndCollaborate {
	title
	description
	image {
			data {
				attributes {
					url
				}
			}
		}
}`;
