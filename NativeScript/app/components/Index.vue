<template>
    <Page>
        <ActionBar>
            <label text="Programmer" fontSize="21"></label>
        </ActionBar>
        <StackLayout>
            <BottomNavigation>
                <TabStrip>
                    <TabStripItem>
                        <Label text="Data"></Label>
                        <Image src="res://browse"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Chart"></Label>
                        <Image src="res://favorites"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Info"></Label>
                        <Image src="res://settings"></Image>
                    </TabStripItem>
                </TabStrip>
                <TabContentItem>
                    <StackLayout orientation="vertical" width="100%"
                        height="100%">
                        <label text="Education" textAlignment="center"
                            fontSize="24" color="blue">
                        </label>
                        <GridLayout id="Education"
                            columns="100, 100, 100, 100" rows="35, 35"
                            borderColor="blue" borderWidth="1"
                            style="text-align:center; margin-bottom: 20px;">
                            <label text="High School & Below" row="0"
                                col="0" />
                            <label text="Specialist" row="0" col="1" />
                            <label text="Undergraduate" row="0" col="2" />
                            <label text="Master & Upper" row="0" col="3" />
                            <label text="3.2%" row="1" col="0" />
                            <label text="19.5%" row="1" col="1" />
                            <label text="65.7%" row="1" col="2" />
                            <label text="11.6%" row="1" col="3" />
                        </GridLayout>

                        <label text="Income" textAlignment="center"
                            fontSize="24" color="orange">
                        </label>
                        <GridLayout id="Income"
                            columns="100, 100, 100, 100, 100" rows="35, 35"
                            borderColor="orange" borderWidth="1"
                            style="text-align:center; margin-bottom: 20px;">
                            <label text="3K less" row="0" col="0" />
                            <label text="3-5K" row="0" col="1" />
                            <label text="5-10K" row="0" col="2" />
                            <label text="10-20K" row="0" col="3" />
                            <label text="20K more" row="0" col="4" />
                            <label text="3.7%" row="1" col="0" />
                            <label text="4.3%" row="1" col="1" />
                            <label text="19.3%" row="1" col="2" />
                            <label text="60.1%" row="1" col="3" />
                            <label text="12.6%" row="1" col="4" />
                        </GridLayout>

                        <label text="House" textAlignment="center"
                            fontSize="24" color="green">
                        </label>
                        <GridLayout id="House" columns="100, 100, 100"
                            rows="35, 35" borderColor="green" borderWidth="1"
                            style="text-align:center; margin-bottom: 20px;">
                            <label text="" row="0" col="0" />
                            <label text="No House" row="0" col="1" />
                            <label text="House" row="0" col="2" />
                            <label text="" row="1" col="0" />
                            <label text="22.4%" row="1" col="1" />
                            <label text="77.6%" row="1" col="2" />
                        </GridLayout>

                        <label text="Car" textAlignment="center" fontSize="24"
                            color="purple">
                        </label>
                        <GridLayout id="Car" columns="100, 100, 100"
                            rows="35, 35" borderColor="purple" borderWidth="1"
                            style="text-align:center; margin-bottom: 20px;">
                            <label text="" row="0" col="0" />
                            <label text="No Car" row="0" col="1" />
                            <label text="Car" row="0" col="2" />
                            <label text="" row="1" col="0" />
                            <label text="41.1%" row="1" col="1" />
                            <label text="58.9%" row="1" col="2" />
                        </GridLayout>

                        <label text="Sex Ratio" textAlignment="center"
                            fontSize="24" color="red">
                        </label>
                        <GridLayout id="SexRatio" columns="100, 100, 100"
                            rows="35, 35" borderColor="red" borderWidth="1"
                            style="text-align:center; margin-bottom: 20px;">
                            <label text="" row="0" col="0" />
                            <label text="Male" row="0" col="1" />
                            <label text="Female" row="0" col="2" />
                            <label text="" row="1" col="0" />
                            <label text="91.6%" row="1" col="1" />
                            <label text="8.4%" row="1" col="2" />
                        </GridLayout>

                        <label text="Age" textAlignment="center" fontSize="24"
                            color="brown">
                        </label>
                        <GridLayout id="Age" columns="100, 100, 100, 100"
                            rows="35, 35" borderColor="brown" borderWidth="1"
                            style="text-align:center; margin-bottom: 20px;">
                            <label text="24 lower" row="0" col="0" />
                            <label text="25-34" row="0" col="1" />
                            <label text="35-44" row="0" col="2" />
                            <label text="45 upper" row="0" col="3" />
                            <label text="19.9%" row="1" col="0" />
                            <label text="64.8%" row="1" col="1" />
                            <label text="14.9%" row="1" col="2" />
                            <label text="0.4%" row="1" col="3" />
                        </GridLayout>
                    </StackLayout>
                </TabContentItem>
                <TabContentItem>
                    <FlexboxLayout flexDirection="column">
                        <GridLayout height="750px">
                            <RadCartesianChart row="0" style="font-size: 12;">
                                <BarSeries v-tkCartesianSeries
                                    :items="AgeCount" categoryProperty="Age"
                                    valueProperty="Number" />
                                <CategoricalAxis
                                    v-tkCartesianHorizontalAxis />
                                <LinearAxis v-tkCartesianVerticalAxis />
                            </RadCartesianChart>
                        </GridLayout>
                        <GridLayout height="750px">
                            <RadPieChart allowAnimation="true" row="0">
                                <PieSeries v-tkPieSeries
                                    selectionMode="DataPoint"
                                    expandRadius="0.4" outerRadiusFactor="0.7"
                                    :items="EducationRatio"
                                    valueProperty="Ratio"
                                    legendLabel="Education" />
                                <RadLegendView v-tkPieLegend position="Right"
                                    title="Educaiton" offsetOrigin="TopRight"
                                    width="180" enableSelection="true" />
                            </RadPieChart>
                        </GridLayout>
                        <GridLayout height="750px">
                            <RadCartesianChart row="0" style="font-size: 12;">
                                <SplineSeries v-tkCartesianSeries
                                    :items="YearNumber"
                                    categoryProperty="Year"
                                    valueProperty="Number" />
                                <CategoricalAxis
                                    v-tkCartesianHorizontalAxis />
                                <LinearAxis v-tkCartesianVerticalAxis />
                            </RadCartesianChart>
                        </GridLayout>
                    </FlexboxLayout>
                </TabContentItem>
                <TabContentItem>
                    <StackLayout orientation="vertical">
                        <Image height="25%" class="m-t-30"
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/HKBU_Logo.svg/316px-HKBU_Logo.svg.png" />
                        <Label class="m-t-25 h1 text-center"
                            text="Programmer Data" style="color: blue" />

                        <ListView for="member in members"
                            style="height:500px; margin-top: 150px;">
                            <v-template>
                                <FlexboxLayout flexDirection="row">
                                    <Label :text="member"
                                        class="t-20 text-center"
                                        style="width: 100%" />
                                </FlexboxLayout>
                            </v-template>
                        </ListView>
                    </StackLayout>
                </TabContentItem>
            </BottomNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import RadCartesianChart from "nativescript-ui-chart/vue";
    Vue.use(RadCartesianChart);

    import Vue from "nativescript-vue";
    import RadDataForm from "nativescript-ui-dataform/vue";
    Vue.use(RadDataForm);

    export default {
        methods: {
            onSearchSubmit(args) {
                let searchBar = args.object;
                console.log("You are searching for " + searchBar.text);
            }
        },

        data() {
            return {
                countries: [{
                        name: "Australia",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png"
                    },
                    {
                        name: "Belgium",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png"
                    },
                    {
                        name: "Bulgaria",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png"
                    },
                    {
                        name: "Canada",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png"
                    },
                    {
                        name: "Switzerland",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png"
                    },
                    {
                        name: "China",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png"
                    },
                    {
                        name: "Czech Republic",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png"
                    },
                    {
                        name: "Germany",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png"
                    },
                    {
                        name: "Spain",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png"
                    },
                    {
                        name: "Ethiopia",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png"
                    },
                    {
                        name: "Croatia",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png"
                    },
                    {
                        name: "Hungary",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png"
                    },
                    {
                        name: "Italy",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png"
                    },
                    {
                        name: "Jamaica",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png"
                    },
                    {
                        name: "Romania",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png"
                    },
                    {
                        name: "Russia",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png"
                    },
                    {
                        name: "United States",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png"
                    }
                ],

                YearNumber: [{
                        Year: "2010",
                        Number: 102
                    },
                    {
                        Year: "2011",
                        Number: 117
                    },
                    {
                        Year: "2012",
                        Number: 123
                    },
                    {
                        Year: "2013",
                        Number: 180
                    },
                    {
                        Year: "2014",
                        Number: 185
                    },
                    {
                        Year: "2015",
                        Number: 192
                    },
                    {
                        Year: "2016",
                        Number: 200
                    },
                    {
                        Year: "2017",
                        Number: 217
                    },
                    {
                        Year: "2018",
                        Number: 233
                    },
                    {
                        Year: "2019",
                        Number: 242
                    },
                    {
                        Year: "2020E",
                        Number: 252
                    }
                ],

                EducationRatio: [{
                        Education: "High School and below",
                        Ratio: 3.2
                    },
                    {
                        Education: "Specialty",
                        Ratio: 19.5
                    },
                    {
                        Education: "Undergraduate",
                        Ratio: 65.7
                    },
                    {
                        Education: "Master and above",
                        Ratio: 11.6
                    }
                ],

                AgeCount: [{
                        Age: "24 lower",
                        Number: 19.9
                    },
                    {
                        Age: "25-34",
                        Number: 64.8
                    },
                    {
                        Age: "35-44",
                        Number: 14.9
                    },
                    {
                        Age: "45 upper",
                        Number: 0.4
                    }
                ],

                members: ["ZHAN Wenxun", "YAN Fuzhang", "QIANG Boyang"]
            };
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }

    #Education label {
        color: blue;
        font-size: 13px;
    }

    #Income label {
        color: orange;
        font-size: 13px;
    }

    #House label {
        color: green;
        font-size: 13px;
    }

    #Car label {
        color: purple;
        font-size: 13px;
    }

    #SexRatio label {
        color: red;
        font-size: 13px;
    }

    #Age label {
        color: brown;
        font-size: 13px;
    }
</style>