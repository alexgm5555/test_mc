import React from 'react';
import Search from '../components/search/Search';
import Items from '../components/item/Item';
import Detail from '../components/detail/Detail';
import PageError from '../components/notPage/PageError';

const getRoutes = () => {
    const jsonRoutes = [
        {
            'path': '/',
            'exact': true,
            'componente': () => {
                const jsxItem = () => ( <Search /> );
                return jsxItem;
            },
          },
        {
            "path": "/items/",
            "exact": true,
            "componente": () => {
                const jsxItem = () => ( <Items /> );
                return jsxItem;
            }
        },
        {
            "path": "/items/:id",
            "exact": true,
            "componente": () => {
                const jsxItem = () => ( <Detail /> );
                return jsxItem;
            }
        },
        {
            "path": "*",
            "exact": false,
            "componente": () => {
                const jsxItem = () => ( <PageError /> );
                return jsxItem;
            }
        }
    ]
    return jsonRoutes
}
export { getRoutes };
