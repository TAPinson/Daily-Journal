console.log("JavaScript attachment confirmed");

import { useJournalEntries } from './JournalDataProvider.js';
import { EntryListComponent } from './JournalEntryList.js';
console.log(useJournalEntries());




EntryListComponent();


//testing entry of primary entry
import { entryComponent } from './JournalEntryList.js'
entryComponent()