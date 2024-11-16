import type { UseFetchOptions } from '#app';

export const useCustomFetch = <T>(
  url: string | (() => string) | ComputedRef<string>,
  options: UseFetchOptions<T> = {},
) => {
  const resolvedUrl = computed(() =>
    typeof url === 'function' ? url() : unref(url),
  );

  const customOptions = { ...options };
  const resp = useFetch(resolvedUrl, {
    ...customOptions,
    baseURL: useRuntimeConfig().public.apiUrl,
  });

  return {
    ...resp,
  };
};
