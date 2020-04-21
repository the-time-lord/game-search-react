import React from 'react';
import dayjs from 'dayjs';
import './InfoTable.scss';
import DetailSection from './DetailSection';
import DetailText from './DetailText';

const InfoTable = ({ platforms, metacritic, developers, publishers, released, tba, genres }) => {
  
  return (
    <div className="detail__info-wrap">
      <DetailSection 
        headingType="h3"
        heading="Platforms:"
      >
        <DetailText text={platforms && platforms.map(platform => platform.platform.name).join(', ').toUpperCase()}/>
      </DetailSection>
      <DetailSection 
        headingType="h3"
        heading="Metascore:"
      >
        {metacritic ?
          <div className="info-table-metacritic" title="metacritic">
            <p>{metacritic}</p>
          </div> : 'N/A'
        }
      </DetailSection>
      <DetailSection 
        headingType="h3"
        heading="Developer:"
      >
        <DetailText text={developers && developers.map(developer => developer.name).join(', ').toUpperCase()} />
      </DetailSection>
      <DetailSection 
        headingType="h3"
        heading="Publisher:"
      >
        <DetailText text={publishers && publishers.map(publisher => publisher.name).join(', ').toUpperCase()} />
      </DetailSection>
      <DetailSection 
        headingType="h3"
        heading="Release date:"
      >
        <DetailText text={released ?
          dayjs(`${released}`).format('DD MMM, YYYY') :
          tba ? 'To be announced' : 'N/A'} />
      </DetailSection>
      <DetailSection 
        headingType="h3"
        heading="Genre:"
      >
        <DetailText text={genres && genres.map(genre => genre.name).join(', ')} />
      </DetailSection>
    </div>
  )
};

export default InfoTable;