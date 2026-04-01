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