import MainLayout from '../layouts/main';
import Hero from '../components/home/hero';
import Items from '../components/items';
import { AssetItemPlaceholder, BundleItemPlaceholder, CollectionItemPlaceholder } from '@fafty-frontend/shared/ui';
import {
  getAssets,
  getBundles,
  getCollections,
  GetAssetsParamsProps,
  GetAssetsResponseProps,
  GetBundlesParamsProps,
  GetBundlesResponseProps,
  GetCollectionsParamsProps,
  GetCollectionsResponseProps,
  useAsync,
} from '@fafty-frontend/shared/api';
import { MutableRefObject, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useOnScreen } from '@fafty-frontend/usehooks';

export default function Home(): JSX.Element {
  // Refs
  const assetsContainerRef = useRef<HTMLDivElement | null>(null);
  const bundlesContainerRef = useRef<HTMLDivElement | null>(null);
  const collectionsContainerRef = useRef<HTMLDivElement | null>(null);

  // Async hooks
  const {
    data: assetsData,
    call: assetsCall,
    // isLoading: assetsIsLoading,
    isSuccess: assetsIsSuccess,
  } = useAsync<GetAssetsResponseProps, GetAssetsParamsProps>({
    callback: getAssets,
  });

  const {
    data: bundlesData,
    call: bundlesCall,
    // isLoading: bundlesIsLoading,
    isSuccess: bundlesIsSuccess,
  } = useAsync<GetBundlesResponseProps, GetBundlesParamsProps>({
    callback: getBundles,
  });

  const {
    data: collectionsData,
    call: collectionsCall,
    // isLoading: collectionsIsLoading,
    isSuccess: collectionsIsSuccess,
  } = useAsync<GetCollectionsResponseProps, GetCollectionsParamsProps>({
    callback: getCollections,
  });

  // On screen hooks
  const assetsContainerOnScreen: boolean = useOnScreen<HTMLDivElement>(
    assetsContainerRef as MutableRefObject<HTMLDivElement>,
    '0px'
  );
  useEffect(() => {
    if (!assetsIsSuccess && assetsContainerOnScreen) {
      assetsCall({ limit: 15, offset: 0 });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assetsContainerOnScreen]);

  const bundlesContainerOnScreen: boolean = useOnScreen<HTMLDivElement>(
    assetsContainerRef as MutableRefObject<HTMLDivElement>,
    '0px'
  );
  useEffect(() => {
    if (!assetsIsSuccess && assetsContainerOnScreen) {
      bundlesCall({ limit: 15, offset: 0 });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bundlesContainerOnScreen]);

  const collectionsContainerOnScreen: boolean = useOnScreen<HTMLDivElement>(
    assetsContainerRef as MutableRefObject<HTMLDivElement>,
    '0px'
  );
  useEffect(() => {
    if (!collectionsIsSuccess && assetsContainerOnScreen) {
      collectionsCall({ limit: 15, offset: 0 });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionsContainerOnScreen]);

  return (
    <MainLayout
      title={'undefined'}
      description={'undefined'}
      className="container"
    >
      <Hero />
      <div className="mt-10" ref={collectionsContainerRef}>
        <div className="flex flex-row items-center justify-center">
          <div className="">
            <h3 className="font-semibold">Top Collections</h3>
          </div>
          <div className="ml-auto right-0">
            <Link href="/collections">
              <a className="text-gray-900 dark:text-gray-50 bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 mb-1 w-full rounded-[7px] p-3 focus:outline-none transition duration-150 ease-in-out">
                See all Collection
              </a>
            </Link>
          </div>
        </div>
        {!collectionsIsSuccess && !collectionsData?.paginate?.count
          ? (
            <div className="items-slider">
              <div className="wrapper-items">
                <div className="items carousel">
                  <div className="min-w-[44px]" />
                    {Array.from({ length: 6 }, (_, index) => (
                      <CollectionItemPlaceholder key={index} />
                    ))}
                  <div className="min-w-[44px]" />
                </div>
              </div>
            </div>
          )
          : collectionsData?.records && (
              <Items type="collection" items={collectionsData?.records} />
            )
        }
      </div>
      <div className="mt-10" ref={bundlesContainerRef}>
        <div className="flex flex-row items-center justify-center">
          <div className="">
            <h3 className="font-semibold">Top Bundles</h3>
          </div>
          <div className="ml-auto right-0">
            <Link href="/bundles">
              <a className="text-gray-900 dark:text-gray-50 bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 mb-1 w-full rounded-[7px] p-3 focus:outline-none transition duration-150 ease-in-out">
                See all Bundles
              </a>
            </Link>
          </div>
        </div>
        {!bundlesIsSuccess && !bundlesData?.paginate?.count
          ? (
            <div className="items-slider">
              <div className="wrapper-items">
                <div className="items carousel">
                  <div className="min-w-[44px]" />
                    {Array.from({ length: 6 }, (_, index) => (
                      <BundleItemPlaceholder key={index} />
                    ))}
                  <div className="min-w-[44px]" />
                </div>
              </div>
            </div>
          )
          : bundlesData?.records && (
              <Items type="asset" items={bundlesData?.records} />
            )
        }
      </div>
      <div className="mt-10" ref={assetsContainerRef}>
        <div className="flex flex-row items-center justify-center">
          <div className="">
            <h3 className="font-semibold">Top Nfts</h3>
          </div>
          <div className="ml-auto right-0">
            <Link href="/assets">
              <a className="text-gray-900 dark:text-gray-50 bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 mb-1 w-full rounded-[7px] p-3 focus:outline-none transition duration-150 ease-in-out">
                See all Nfts
              </a>
            </Link>
          </div>
        </div>
        {!assetsIsSuccess && !assetsData?.paginate?.count
          ? (
            <div className="items-slider">
              <div className="wrapper-items">
                <div className="items carousel">
                  <div className="min-w-[44px]" />
                    {Array.from({ length: 6 }, (_, index) => (
                      <AssetItemPlaceholder key={index} />
                    ))}
                  <div className="min-w-[44px]" />
                </div>
              </div>
            </div>
          )
          : assetsData?.records && (
              <Items type="asset" items={assetsData?.records} />
            )
        }
      </div>
    </MainLayout>
  );
}
