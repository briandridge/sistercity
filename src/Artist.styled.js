import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;


const Image = styled.img`
  margin: 1rem auto;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 1rem auto;
`;

const Description = styled.div`
  font-size: 14px;
  text-align: left;
  margin: 1rem auto;
  width: 500px;
`;

const Lineup = styled.div`
  font-size: 14px;
  text-align: left;
`;

const Releases = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 1rem auto;
  border-bottom: 5px solid black;
`;

const SpotifyEmbed = styled.div`
  margin: 1rem auto;
  text-align: left;
`;

const Record = styled.div`
  text-align: left;
`;

export {
  Description,
  Image,
  Lineup,
  SpotifyEmbed,
  Title,
  Record,
  Releases,
  Wrapper,
  LogoWrapper,
};
