import React from 'react'
import PropTypes from 'prop-types'
import StoreCard from '../components/StoreCard'

function Store({ store }) {
	const storeCards = store.map(
		({ id, author, image, quantity, price, quote }) => (
            <StoreCard 
                id={id}
                author={author}
                image={image}
                quantity={quantity}
                price={price}
                quote={quote}
            /> 
		)
	)
	return storeCards
}

export default Store

Store.propTypes = {
	store: PropTypes.array.isRequired
}
