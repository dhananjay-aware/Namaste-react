# Namaste-react
/* info
: 
aggregatedDiscountInfoV3
: 
discountTag
: 
"FLAT DEAL"
header
: 
"15% OFF" */

# 
@type
: 
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card

<ul>
                {menuItem.map(item =><li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100}</li>)}
                
            </ul>