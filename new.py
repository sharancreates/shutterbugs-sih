import xarray as xr
import pandas as pd
from sqlalchemy import create_engine

ds = xr.open_dataset(r"C:\Users\Sharanya Nagar\Downloads\nodc_D1900975_339.nc")
ds_core = ds[['pres', 'temp', 'psal', 'juld', 'latitude', 'longitude']]
ds_core = ds_core.squeeze()
df_core = ds_core.to_dataframe().reset_index()
engine = create_engine('postgresql://postgres:admin@localhost:5432/database')
df_core.to_sql('argo_profiles_cleaned', con=engine, if_exists='replace', index=False)