.shop-category {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    margin: auto;   
}


.shop-category .banner-image{
    display: block;
    width: 100%;
}
.shopcategory-indexSort{
    width: 100%;
    display: flex;
    gap: 90px;
    padding: 10px;
    margin: 20px 170px 0px 170px;
    justify-content: space-between;
    align-items: center;
}
.shopcategory-indexSort> p, span{
    font-weight: 600;
}
.shopcategory-products {
    padding: 0px 0px 0px 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 20px;
    margin: auto;
}
.shopcategory-sort{
    padding: 10px;
    border-radius: 40px;
    border: 1px solid #888;
}
.shopcategory-loadmore{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 150px;
    width: 233px;
    height: 69px;
    border-radius: 75px;
    background: #ededed;
    color: #787878;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
}
