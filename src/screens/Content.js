import React from "react";
import JsonData from "../feed/sample.json";
import "../style/content.css";
import "bootstrap/dist/css/bootstrap.min.css"
import SPagination from "simple-react-pagination-js";
import "simple-react-pagination-js/build/style.css";

// MARK: Content component - It will appear Series and Movies Page
class Content extends React.Component {

    // MARK: Constructor
    constructor(props) {
        super(props);

        // MARK: Variables
        this.state = {
            currentPage: 0,
            perPage: 21,
            allObj: [],
            seriesEntries: [],
            moviesEntries: [],
            programType: "",

            // MARK: API Fetch check loading or error
            isLoading: false,
            page: 1,
            size: 0,
            isError: false
        };
        // MARK: Pagination Functions
        this.handleOnPageChange = this.handleOnPageChange.bind(this);
        this.handleOnSizeChange = this.handleOnSizeChange.bind(this);

    }

    // MARK: Pagination Functions
    handleOnPageChange = (page) => {
        this.setState({ page })
        console.log(page);
    }

    // MARK: Pagination Functions
    handleOnSizeChange = (size) => {
        this.setState({ size, page: 1 })
    }

    // MARK: Read JSON in file system and put it in an array to render 
    fillTheArray(prgType) {
        // MARK: Pagination variables
        var index = 0;
        var pageIndex = 0;
        this.state.size = 0;
        var series = [];
        JsonData.entries.map((data, i) => {
            if (data.programType === prgType && data.releaseYear >= "2010") {
                this.state.size++;
                series[index] = data;
                index++;
                if (index == 20) {
                    index = 0;
                    this.state.seriesEntries[pageIndex] = Object.values(series).sort(function (a, b) {
                        if (a.title > b.title) {
                            return 1;
                        }
                        if (b.title > a.title) {
                            return -1;
                        }
                        return 0;
                    });
                    pageIndex++;
                }
            }
        });
    }

    // MARK: To render an array to show in web page
    // NOTE: Show 20 Series/Movies is sorted their own name by ascending order and after releaseYear >= 2010
    // NOTE: The count of Series is 40, Movies is 20. Due to that, pagination of Series screen is 2 page, Movie screen is 1 page
    render() {

        // MARK: programType is taken from Series and Movies component
        const prgType = this.props.programType

        // MARK: Call function to fill array
        this.fillTheArray(prgType);

        const page = this.state.page
        const size = this.state.size;
        const a = this;


        const seriesEnt = this.state.seriesEntries;
        console.log(seriesEnt)

        // MARK: Return element 
        return (
            <div> {seriesEnt[page - 1].map(element => {
                return (
                    <div className="divContainer" key={element}>
                        <div class="cards-list">
                            <div class="card">
                                <div class="card_image">
                                    <img src={element.images["Poster Art"].url} width={element.images["Poster Art"].width} alt={element.tite} />
                                    <div className="cardTitle">
                                        <h4>{element.title.length > 20 ? element.title.substring(0, 15).concat("...") : element.title}</h4>
                                        <h6>{element.releaseYear}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
                <div style={{ clear: "both" }}></div>
                <div className="paginationClass">
                    <SPagination page={page}
                        sizePerPage={20}
                        totalSize={size - 20}
                        pagesNextToActivePage={1}
                        onPageChange={a.handleOnPageChange}
                        onSizeChange={a.handleOnSizeChange} />
                </div>
            </div>
        );
    }
}

export default Content;
