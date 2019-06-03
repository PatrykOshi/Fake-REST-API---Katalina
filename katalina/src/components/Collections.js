import React from 'react';
import '../css/Collections/collections.css';
import CollectionComponent from './collectionComponent';
import mottoLogo from '../content/CollectionsLogo/MOTTO.jpg';
import lpLogo from '../content/CollectionsLogo/LA PASSION.jpg';
import enLogo from '../content/CollectionsLogo/EN VOGUE.jpg';
import TODD from '../content/CollectionsLogo/TODD.jpg';
import prLogo from '../content/CollectionsLogo/preludium.jpg';
import shLogo from '../content/CollectionsLogo/SHOUT.jpg';
import lcLogo from '../content/CollectionsLogo/la corona.jpg';
import tzLogo from '../content/CollectionsLogo/TALISMAN.jpg';
import geosLogo from '../content/CollectionsLogo/sticker for lens.jpg';

const Collections = () => {
    return (
        <section className="container collectionPresentation">
            <div className="row text-center">
                <CollectionComponent colId={1} imgSrc={mottoLogo} altTag="MOTTO"/>
                <CollectionComponent colId={4} style={{marginLeft:"20px"}} imgSrc={lpLogo} altTag="LA PASSION"/>
                <CollectionComponent colId={3} imgSrc={enLogo} altTag="EN VOGUE"/>
                <CollectionComponent colId={6}  imgSrc={TODD} altTag="TODD"/>
                <CollectionComponent colId={5} imgSrc={prLogo} altTag="PRELUDIUM"/>
            </div>
            <div className="container" style={{marginTop: '-120px'}}>
                <div className="row text-center">
                    <CollectionComponent imgSrc={shLogo} altTag="SHOUT"/>
                    <CollectionComponent imgSrc={lcLogo} altTag="LA CORONA"/>
                    <CollectionComponent imgSrc={tzLogo} altTag="TALISMAN"/>
                    <CollectionComponent colId={2} imgSrc={geosLogo} altTag="GEOS"/>
                </div>
            </div>
        </section>
    );
};

export default Collections;