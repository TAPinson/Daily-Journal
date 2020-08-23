// responsible for rendering a list of entry components

/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered to the list of entries
const entryLog = document.querySelector("#postsAside")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryLog.innerHTML += `
        <div class="postTab">Date: ${entry.date} Title: ${entry.concept}</div>
        
        `
    }
}

// Dom reference to where the primary entry will be displayed
const primaryEntry = document.querySelector("#entry-entry")

export const entryComponent = () => {
    primaryEntry.innerHTML += `
    <p></p>
    <div>
        Gallagher was born on Fort Bragg, North Carolina, to a family of Irish and Croatian heritage.[1] 
        Until the age of nine, he lived in Lorain, Ohio, but because of his asthma, the family moved to South Tampa, Florida, 
        where he attended H.B. Plant High School. He went on to graduate from the University of South Florida with a chemical engineering 
        degree in 1970.[2][1] He minored in English literature, which he uses often in his skits to mock the language.
        <p></p>
        I am pulling this data from entryComponent() in JournalEntryList.js and it is being posted to the dom. 
    
    </div>`
}