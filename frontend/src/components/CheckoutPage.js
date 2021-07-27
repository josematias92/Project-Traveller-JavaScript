import React from 'react';
import logo from '../logo_aircraft.svg'
import useFetch from './useFetch';
import {  useParams } from "react-router-dom";

const CheckoutPage = () => {

    const { id } = useParams();
    const {data: infos, loading, error} = useFetch('/getAllJourneysFromAnEvent/' + id ) 


    return ( 
        <section className="background-section-checkout">
            <div className="checkout-container-1">
                <div className="card-for-location_activities mx-5">
                    <p className="name-for-card-checkout">Location</p>
                    {infos && <p className="location-in-card">{infos[0].event.location} </p> }
                    {infos && <div className="">{infos[0].activities.map( activity => {return  <p> {activity.name} </p> } ) } </div> }
                    <img className="logo-nav-checkout" src={logo}/>
                </div>
                <div className="detail-for-checkout p-3">
                    <p className="details-card-header">Details</p>
                    <p className="agent-assigned">Agent ID</p>
                    {infos && <p>{infos[0].event.agent} </p> }
                    <p className="event-id">Event ID</p>
                    {infos && <p>{infos[0].event._id} </p> }
                    <p className="traveller-id">Traveller ID</p>
                    {infos && <p>{infos[0].event.traveller} </p> }
                </div>
                <div className="card-for-checkout mx-5">
                    <p>Points</p>
                    <p className="points-for-checkout">20</p>
                    <p className="total-legend-checkout">Total</p>
                    {infos && <p className="travellers-company">Travellers: {infos[0].event.number} </p> }
                </div>
                
                <div></div>
                <div></div>
                <div></div>
            </div>
            
                
                
                
                
        </section>
     );
}
 
export default CheckoutPage;