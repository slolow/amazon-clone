import { Product } from '../components/Product';
import products from '../assets/products.json';
import { useTheme } from '@emotion/react';

export const Home = () => {
    const theme = useTheme();

    return (
        <div id='homeContainer'
            style={{
                height: '100vh',
                width: '100vw',
                backgroundImage: 'url("https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                gap: "5%",
                justifyItems: "center",
                fontFamily: theme.typography.fontFamily,
                color: theme.palette.text.primary,
                padding: "2% 0",
            }}
        >
            {products.map((product) => (
                    <Product
                        key={product.id} 
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        imgSrc={product.imgSrc}
                        imgAlt={product.imgAlt}
                    />
                ))
            }
        </div>
    )
}