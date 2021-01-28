<h2>Box's and Arrows</h2>

```
<div class="mermaid">
graph TD
person --> xxx
person --> yyy
person --> zzz
</div>
```

<div class="mermaid">
graph TD
person --> xxx
person --> yyy
person --> zzz
</div>


<h2>Customer Journey</h2>
```
<div class="mermaid">
journey
    title Get Covid funding support
    section Find Funding
      Google it: 4: Customer
      Talk to peers: 5: Customer
      Visit FBS: 4: Customer
      Do work: 1: Customer, Stakeholder
    section Choose Support
      Reduce number of options: 3: Customer
      Read details of shortlist: 4: Customer
    section Apply for Support
      Start Application: 5: Customer
      Create Account: 2: Customer
      Submit Application: 4: Customer
</div>
```


<div class="mermaid">
journey
    title Get Covid funding support
    section Find Funding
      Google it: 4: Customer
      Talk to peers: 5: Customer
      Visit FBS: 4: Customer
      Do work: 1: Customer, Stakeholder
    section Choose Support
      Reduce number of options: 3: Customer
      Read details of shortlist: 4: Customer
    section Apply for Support
      Start Application: 5: Customer
      Create Account: 2: Customer
      Submit Application: 4: Customer
</div>

<h2></h2>
```
```


<div class="mermaid">
pie title Exports
    "Food & Drink" : 386
    "Tech" : 85
    "Life Sciences" : 15
</div>


<h2></h2>
```
```

<div class="mermaid">
graph LR
    A[Search] -->|Google Financial Support| B(Google Results)
    B --> C{Choose}
    C -->|UK| D[GovUK]
    C -->|UK| D[HMRC]
    C -->|Scot| E[FBS]
    C -->|Scot| F[GovScot]
            
</div>


<h2></h2>
```
```

<div class="mermaid">
classDiagram
    FBS_Listing <|-- Body
    FBS_Listing <|-- Fund
    FBS_Listing <|-- Segment
    FBS_Listing : +String Funding_Body
    FBS_Listing : +String Fund_Name
    FBS_Listing : +String Segment
    FBS_Listing: +isOpen()
    class Body{
      +String Funding_Body
      +String Email
      +String Phone
      +emailMe()
      +phoneMe()
    }
    class Fund{
      +String Fund_Name
      -int LowerLimit
      -int UpperLimit
      -isOpen()
    }
    class Segment{
      +String Segment
      -int Rank
      -isPriority()
    }
</div>
