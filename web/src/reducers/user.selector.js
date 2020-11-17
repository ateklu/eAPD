export const getIsAdmin = ({
  user: {
    data: { role }
  }
}) => {
  return role === 'admin';
};

export const getUserStateOrTerritory = ({
  user: {
    data: { state }
  }
}) => state;

export const getUserStateOrTerritoryStatus = ({
  user: {
    data: {
      state: { id },
      affiliations
    }
  }
}) => {
  const { status } = affiliations.find(
    affiliation => affiliation.state_id === id
  );
  return status;
};
