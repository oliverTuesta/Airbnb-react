const Card = (props) => {
    const { coverImg, title, price, openSpots, stats } = props;

    return (
        <>
            <div className="relative text-xs">
                <p className="absolute w-20 p-1 text-xs text-center bg-white rounded top-2 left-2">
                    {openSpots > 0 ? 'ONLINE' : 'SOLD OUT'}
                </p>
                <div className="w-48 h-64 overflow-hidden rounded-lg">
                    <img
                        className="object-cover w-full h-full overflow-hidden"
                        src={coverImg}
                        alt={`${title} image`}
                    />
                </div>
                <p className="mt-2 text-xs">
                    <span className="text-base text-rose-500">★ </span>
                    {stats.rating}
                    <span className="ml-1 text-gray-400">{`(${stats.reviewCount})-USA`}</span>
                </p>
                <h3 className="my-1">{title}</h3>
                <p className="mb-4 font-bold">
                    {`From $${price}`}
                    <span className="font-normal text-gray-400"> / person</span>
                </p>
            </div>
        </>
    );
};

export default Card;
