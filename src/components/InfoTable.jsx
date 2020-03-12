import React from 'react';
import dayjs from 'dayjs';
import './InfoTable.scss';
import DetailSection from './DetailSection';

const InfoTable = ({ platforms, metacritic, developers, publishers, released, tba, genres }) => {
  
  return (
    <div className="detail__info-wrap">
      <DetailSection 
        headingType="h3"
        heading="Platforms:"
        textType="p"
        text={platforms && platforms.map(platform => platform.platform.name).join(', ').toUpperCase()}
      />
      <DetailSection 
        headingType="h3"
        heading="Metascore:"
        textType={metacritic ? "div" : "p"}
        text={metacritic &&
          <div className="info-table-metacritic" title="metacritic">  
            <p>{metacritic}</p>
          </div>
        }
      />
      <DetailSection 
        headingType="h3"
        heading="Developer:"
        textType="p"
        text={developers && developers.map(developer => developer.name).join(', ').toUpperCase()}
      />
      <DetailSection 
        headingType="h3"
        heading="Publisher:"
        textType="p"
        text={publishers && publishers.map(publisher => publisher.name).join(', ').toUpperCase()}
      />
      <DetailSection 
        headingType="h3"
        heading="Release date:"
        textType="p"
        text={released ?
          dayjs(`${released}`).format('DD MMM, YYYY') :
          tba ? 'To be announced' : 'N/A'}
      />
      <DetailSection 
        headingType="h3"
        heading="Genre:"
        textType="p"
        text={genres && genres.map(genre => genre.name).join(', ')}
      />
    </div>
  )
}

export default InfoTable;