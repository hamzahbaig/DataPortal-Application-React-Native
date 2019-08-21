import { StyleSheet } from "react-native";


export let sectionStyles = StyleSheet.create({
  mainContainerL: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30
  },
  mainContainerN: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
    paddingTop: 30
  },
  contentTextStyleL: {
    textAlign: "justify",
    paddingTop: 20
  },
  contentTextStyleN: {
    textAlign: "justify",
    color: "white",
    paddingTop: 20
  },
  headingStyleL: {
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 5,
    paddingBottom: 5,
    borderBottomColor: "#e4e4e4"
  },
  headingStyleN: {
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 5,
    borderBottomColor: "grey",
    color: "white",
    paddingBottom: 5
  },
  descriptionStyle: {
    paddingTop: 10,
    color: "grey",
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center"
  },
  footerStyle: {
    backgroundColor: "#01411cff",
    width: "100%",
    height: 50,
    borderTopWidth: 2,
    borderTopColor: "black"
  }
});