import React from 'react';
import { Grid, Cell } from "styled-css-grid";
import Search from '../../SearchPlugin/components/Search'
import Map from  "../../MapPlugin/components/Map"
import TweetStreamer from "../../TweetStreamer/components/TweetStreamer"

export default class App extends React.Component {
    render() {
        return (
            <Grid  columns={2} gap="2px">
                <Cell height={3} width={2} ><Search/></Cell>
                <Cell height={10} width={2} center middle><Map/></Cell>
                <Cell height={10} width={1} center middle>Artist and the album</Cell>
                <Cell height={3} width={1} center middle><TweetStreamer/></Cell>
                <Cell width={2} center middle>Miscellaneous like google events and stuff</Cell>
            </Grid>
        );
    }
}

