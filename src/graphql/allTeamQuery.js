export const TEAM_QUERY = `
  query GetTeamData {
    teams {
      data {
        id
        attributes {
          name
          position
          english_level
          level
          direction
          price
          language {
            id
            text
            level
          }
          cv_photo {
            data {
              attributes {
                url
                formats
              }
            }
          }
        }
      }
    }
    global {
      data {
        attributes {
          tr_team_direction
          tr_team_english
          tr_team_level
          tr_team_name
        }
      }
    }
  }
`;
