CREATE DEFINER=`root`@`localhost` PROCEDURE `michelin`.`sp_get_search_result`(IN _query varchar(512))
BEGIN
	SELECT
		ms.id,
        ms.name,
        d.description,
        ms.address,
        ms.location,
        ms.minprice,
        ms.maxprice,
        ms.currency,
        ms.cuisine,
        ms.longitude,
        ms.latitude,
        ms.phonenumber,
        ms.url,
        ms.websiteurl,
        ms.award
    FROM
        michelin_star ms
        left join descriptions d
        	on ms.id = d.restaurant_id
    WHERE
    	ms.name LIKE CONCAT('%', _query , '%')
        or
        ms.address LIKE CONCAT('%', _query , '%')
        or
        ms.cuisine LIKE CONCAT('%', _query , '%');

END
