## What are Schemas?

In truAudits, **Schemas** act as the structural blueprint for your audits. They are essential for organizing and categorizing various audit items into a logical hierarchy.

Think of a schema as a structured table of contents for an audit. It breaks down the overarching audit standard into manageable **Item Categories**, which then contain specific **Audit Items** (the core topics or requirements to be evaluated).

### Example: ISO 27001:2022

To illustrate, let's look at the **ISO 27001:2022** standard:

* **Item Categories:** The standard is broadly divided into specific categories such as **Clauses** and **Controls**.
* **Audit Items:** Within the **Clauses** category, you will find individual audit items. For instance, Clause number 1, titled **"Scope"**, represents a single audit item that needs to be assessed. 

By utilizing schemas, truAudits ensures that your audit process remains structured, comprehensive, and easy to navigate.

---

### How to Create a New Schema

Follow these simple steps to build a custom schema for your audits:

1. **Navigate to Schema Management:** From the main menu, click on **Schemas** and then select **Manage**. This will open the Schema Management window.
   
   <div align="left">
      <img src="images/BuildNewSchema.png" alt="Build New Schema" style="border: 1px solid black;" />
   </div>

2. **Define the Schema Name and First Category:**
   * In the **Schema Name** field, enter your desired name (e.g., `ISO27001_2022`).
   * In the **Item Category** field, type `Clauses` and press **Enter**.

   > **Note:** The system automatically generates the columns **Item Number** and **Title** below for you. The **Item Number** column is mandatory in each Item Category. It is used extensively by the system to track all activities against that selected audit item throughout your assessment.

3. **Add Additional Categories and Save:**
   * Next, type `Controls` into the **Item Category** field and press **Enter** to add your second category.
   * Once you have added all necessary categories, click **Save**.

**Important: Your custom schema template is automatically saved as an Excel file in the designated path:** 
`{UserSelectedDocumentRepository}/SchemaTemplates/Custom`

---

### Bulk Entry via Excel Template

After creating your schema structure, you can easily load all your audit items at once by making bulk entries directly into the generated Excel file.

Follow these steps to populate your schema:

1. **Open the Data File:** From the main menu, navigate to the **Schemas** tab and click on **Open Data File**. This will seamlessly open the Excel template that was saved in:
   `{UserSelectedDocumentRepository}/SchemaTemplates/Custom`
2. **Understand the Structure:** Inside the Excel file, you will notice that each **Worksheet (Tab)** at the bottom corresponds to an **Item Category** you created (e.g., _Clauses_, _Controls_). The **Column Headers** within those worksheets match the columns you defined (e.g., _Item Number_, _Title of Item_).
3. **Format as Text:** Before pasting or typing your data, you must ensure that **all columns are set to the "Text" data format** in Excel. This prevents Excel from accidentally reformatting your item numbers (such as converting the number "1.1" into a date).
4. **Enter Your Data:** Fill in your audit items row by row under the matching worksheets and simply save the Excel file when finished.

> **Important:** The **Item Number** column is strictly mandatory. Please ensure that this column is available and appropriately filled out in each worksheet within your Excel file.