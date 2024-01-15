import pandas as pd

irt_path = 'C:/Users/bendert/OneDrive - World Vision Canada/Shared - IVS/4. Analytics/Portfolio Analysis/Indicator Breakdown and Coding/IndicatorReferenceTable_IRT_v13.xlsx'

irt_df = pd.read_excel(irt_path, sheet_name='Indicator Ref Table')

n=4
new_header = irt_df.iloc[n-2] #grab the first row for the header
irt_df = irt_df[n-1:] #take the data less the header row
irt_df.columns = new_header #set the header row as the df header

#reset index so all columns are in the sheet
irt_df = irt_df.reset_index(drop=True)
#drop columns with nan column header
irt_df = irt_df.drop(float('nan'), axis=1)

#dump
irt_df.reset_index().to_json("IRT.json", orient="records")