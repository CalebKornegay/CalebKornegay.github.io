import React from "react";
import { Margin } from "../../consts";
import styled from '@emotion/styled';
import Divider from "../../components/divider";
import { FaGithub } from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 100rem;
  margin: 0px 10px 0px 10px;
`;

const GalleryBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  max-width: 100%;
`;

const GalleryRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  max-width: 100%;
  justify-content: center;
`;

const Hotlinks = styled.div`
  height: 3em;
  width: 15rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 25px;
`;

const HotLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  text-decoration: none;
`;

const Hotlink = styled.a`
  height: fit-content;
  border-radius: 250px;
  align-items: center;
  justify-content: center;
  border-color: white;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 5px;
  display: flex;
`;

const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 50%;
  max-height: 85vh;
`;

export default function OpenTicket() {
  React.useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Margin />
      <h1>OpenTicket</h1>
      <h2>Description</h2>
      <div>
        <p>
          OpenTicket is a first-class replacement for TicketMaster and StubHub.
        </p>
        <p>
          Its services offer ticket creation, listing, purchase, and
          peer-to-peer transfer with future work including a ticket marketplace
          and memorabilia.
        </p>
        <p>
          It enforces single-sale tickets and denies the ability to price gouge
          when reselling.
        </p>
      </div>

      <Divider />
      <Hotlinks>
        <HotLinkBox>
          Web2
          <Hotlink
            href="https://github.com/OpenTix/platform"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub size={25} color={"black"} />
          </Hotlink>
        </HotLinkBox>

        <HotLinkBox>
          Web3
          <Hotlink
            href="https://github.com/OpenTix/eth-contracts"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub size={25} color={"black"} />
          </Hotlink>
        </HotLinkBox>
      </Hotlinks>

      <Margin />
      <h2>Gallery</h2>

      <h3>User Web Interface</h3>
      <GalleryBox>
        <GalleryRow>
          <Image
            src="/senior_design/user_home_1.png"
            alt="blockchain event ticketing"
          />
          <Image
            src="/senior_design/user_home_2.png"
            alt="blockchain event ticketing"
          />
        </GalleryRow>

        <GalleryRow>
          <Image
            src="/senior_design/user_home_3.png"
            alt="blockchain event ticketing"
          />
          <Image
            src="/senior_design/user_search.png"
            alt="blockchain event ticketing"
          />
        </GalleryRow>

        <GalleryRow>
          <Image
            src="/senior_design/user_profile_tickets.png"
            alt="blockchain event ticketing"
          />
          <Image
            src="/senior_design/user_profile_ticket_transfer.png"
            alt="blockchain event ticketing"
          />
        </GalleryRow>
      </GalleryBox>
      <Margin />

      <h3>User Mobile Interface</h3>
      <GalleryBox>
        <GalleryRow>
          <Image
            src="/senior_design/user_mobile_details.jpg"
            alt="blockchain event ticketing"
          />
          <Image
            src="/senior_design/user_mobile_tickets.jpg"
            alt="blockchain event ticketing"
          />
        </GalleryRow>
      </GalleryBox>
      <Margin />

      <h3>Vendor Web Interface</h3>
      <GalleryBox>
        <GalleryRow>
          <Image
            src="/senior_design/vendor_events.png"
            alt="blockchain event ticketing"
          />
          <Image
            src="/senior_design/vendor_venues.png"
            alt="blockchain event ticketing"
          />
        </GalleryRow>

        <GalleryRow>
          <Image
            src="/senior_design/vendor_event_history.png"
            alt="blockchain event ticketing"
          />
          <Image
            src="/senior_design/vendor_profile.png"
            alt="blockchain event ticketing"
          />
        </GalleryRow>
      </GalleryBox>
      <Margin />

      <h3>Vendor Mobile Interface</h3>
      <GalleryBox>
        <GalleryRow>
          <Image
            src="/senior_design/vendor_mobile_events.jpg"
            alt="blockchain event ticketing"
          />
          <Image
            src="/senior_design/vendor_mobile_venues.jpg"
            alt="blockchain event ticketing"
          />
        </GalleryRow>

        <Image
          style={{ alignSelf: "center" }}
          src="/senior_design/vendor_mobile_details.jpg"
          alt="blockchain event ticketing"
        />
      </GalleryBox>

      <Margin />
    </Container>
  );
}
